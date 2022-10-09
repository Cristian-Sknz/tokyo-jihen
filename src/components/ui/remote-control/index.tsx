import React from 'react';
import classNames from 'classnames';
import {
  ButtonsContainer,
  ButtonsIlustration,
  ControlNavbar,
  NavbarList,
  NavbarListItem,
  RemoteControlContainer,
  TokyoIncidentsLogo
} from './styled';

import Routes from '../../../routes/routes.json';
import LinkElement from '../../template/link';
import { useRouteName } from '../../../routes/useRouteName';
import { useRemoteControl } from './context';

const path = '/images/remote-control';

type NavbarItemProps = {
  item: typeof Routes[0];
} & React.HTMLAttributes<HTMLElement>;

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  const { getRoute } = useRouteName();
  return (
    <NavbarListItem {...props} className={classNames({'active': getRoute() === props.item})}>
      <LinkElement to={props.item.url} external={props.item.external}>
        {props.item.name}
      </LinkElement>
    </NavbarListItem>
  );
};

const RemoteControl: React.FC = () => {
  const { open, toggle } = useRemoteControl();
  return (
    <RemoteControlContainer className={classNames({'active': open})}>
      <ButtonsContainer>
        <ButtonsIlustration src={`${path}/remo_top.png`} />
        <ControlNavbar>
          <NavbarList>
            {Routes.map((item) => (
              <NavbarItem key={item.name} item={item} onClick={toggle}/>
            ))}
          </NavbarList>
        </ControlNavbar>
        <ButtonsIlustration src={`${path}/remo_bottom.png`} />
        <TokyoIncidentsLogo alt='Tokyo Jihen Logo'/>
      </ButtonsContainer>
    </RemoteControlContainer>
  );
};

export default RemoteControl;