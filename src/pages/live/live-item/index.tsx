import React, { useCallback, useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { ArrowIconContainer, LiveListItem, LiveTitle } from '../styled';
import classNames from 'classnames';

type LiveItemType = {
  title: string;
  content?: string;
};

type LiveItemProps = {
  item: LiveItemType;
};

const LiveItem: React.FC<LiveItemProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = useCallback(() => setToggle(!toggle), [toggle]);

  return (
    <LiveListItem className={classNames({ active: toggle })} onClick={handleToggle}>
      <LiveTitle>{props.item.title}</LiveTitle>
      <ArrowIconContainer>
        <Icon icon={faPlay} />
      </ArrowIconContainer>
    </LiveListItem>
  );
};

export default LiveItem;