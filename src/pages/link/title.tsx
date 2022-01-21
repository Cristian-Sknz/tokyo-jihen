import React from 'react';
import { List, ListContainer, ListTitle } from './styled';

type LinkListProps = {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const LinkList: React.FC<LinkListProps> = (props) => {
  return (
    <ListContainer>
      <ListTitle>{props.title}</ListTitle>
      <List>
        {props.children}
      </List>
    </ListContainer>
  );
};

export default LinkList;
