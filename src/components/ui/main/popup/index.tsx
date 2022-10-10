import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { PopupContainer } from './styled';
import Markdown, { MarkdownWrapper } from '../../markdown';
import { useRemoteControl } from '../../remote-control/context';
import classNames from 'classnames';
import Loading from '../../../template/loading';

export type PopupHandler = {
  close(): void;
  open(id: number): void;
};

type PopupComponent = React.ForwardRefRenderFunction<PopupHandler, {}>;

const Popup: PopupComponent = (props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(true);
  const { misc, toggle } = useRemoteControl();

  useEffect(() => {
    return () => {
      toggle();
      misc.setOverflow(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const fetchMarkdown = useCallback(async (id: number) => {
    setLoading(true);
    const response = await fetch(`/content/${id}.md`);
    setLoading(false);
    setMarkdown(await response.text());
  }, []);

  const close = useCallback(() => {
    toggle();
    setVisible(false);
    misc.setOverflow(true);
  }, [misc, toggle]);

  const open = useCallback(
    (id: number) => {
      fetchMarkdown(id);
      toggle(close);
      setVisible(true);
      misc.setOverflow(false);
    },
    [fetchMarkdown, misc, toggle, close]
  );

  useImperativeHandle(ref, () => {
    return { close, open };
  }, [close, open]);

  return (
    <PopupContainer
      className={classNames({ visible })}
      style={{ top: `${misc.main.current?.scrollTop || 0}px` }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <MarkdownWrapper>
          <Markdown>{markdown}</Markdown>
        </MarkdownWrapper>
      )}
    </PopupContainer>
  );
};

export default React.forwardRef(Popup);
