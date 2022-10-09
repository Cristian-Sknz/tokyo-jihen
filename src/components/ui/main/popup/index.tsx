import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { CloseButton, PopupContainer } from './styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Markdown from '../../markdown';
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
  const { misc } = useRemoteControl();

  useEffect(() => {
    return () => misc.setOverflow(true)
  }, [])

  const fetchMarkdown = useCallback(async (id: number) => {
    setLoading(true);
    const response = await fetch(`/content/${id}.md`);
    setLoading(false);
    setMarkdown(await response.text());
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    misc.setOverflow(true);
  }, [misc]);

  const open = useCallback(
    (id: number) => {
      fetchMarkdown(id);
      setVisible(true);
      misc.setOverflow(false);
    },
    [fetchMarkdown, misc]
  );

  useImperativeHandle(ref, () => {
    return { close, open };
  }, [close, open]);

  return (
    <PopupContainer
      className={classNames({ visible })}
      style={{ top: `${misc.main.current?.scrollTop || 0}px` }}
    >
      <CloseButton onClick={close} className={'menu'} icon={faTimes} />
      {isLoading ? <Loading /> : <Markdown>{markdown}</Markdown>}
    </PopupContainer>
  );
};

export default React.forwardRef(Popup);
