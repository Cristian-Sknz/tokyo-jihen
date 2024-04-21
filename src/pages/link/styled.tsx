import classNames from 'classnames';
import styled from 'styled-components';
import { WidthLimiter } from '../../styles';

export const LinkContainer = styled.div`
  ${WidthLimiter}
`;

export const ListContainer = styled.div`
  color: white;
  font-family: system-ui, "Arial", sans-serif;
  margin: 1.5rem;
`;

export const ListTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const List = styled.ul`
  margin: 1rem;
  margin-bottom: 3rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-family: sans-serif;
  margin: 1.2rem 0;
`;
const LinkListItem = styled.a`
  color: white;
`;

type LinkListProps = {
  href: string;
  children?: (JSX.Element | JSX.Element[] | string | null); 
};

export const LinkItem: React.FC<LinkListProps> = (props) => {
  return (
    <ListItem>
      <LinkListItem href={props.href} target={'_blank'} rel='noreferrer'>
        {props.children}
      </LinkListItem>
    </ListItem>
  );
};

type LinkItemWithIconProps = LinkListProps & {
  icon: string;
  alt?: string;
};

const Icon = styled.img`
  display: inline-block;
  margin-right: .3rem;
  width: 40px;

  vertical-align: middle;
  filter: contrast(0.3) brightness(5);

  &.no-text {
    width: 100px;
  }
`;

export const LinkItemWithIcon: React.FC<LinkItemWithIconProps> = (props) => {
  return (
    <LinkItem href={props.href}>
      <><Icon className={classNames({ 'no-text': !props.children })}src={props.icon} alt={props.alt}/>
        {props.children}</>
    </LinkItem>
  );
};
