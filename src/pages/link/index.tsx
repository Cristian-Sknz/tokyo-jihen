import React from 'react';
import PageHeader from '../../components/template/page-title/header';
import { LinkContainer, LinkItemWithIcon } from './styled';
import LinkList from './title';
import JihenLinks from '../../assets/links.json';

function removeDuplicates<T>(array: T[]) {
  return array.filter((elem, index, self) => index === self.indexOf(elem));
}

const Link: React.FC = () => {
  const groups = removeDuplicates(JihenLinks.map((item) => item.group));

  return (
    <LinkContainer>
      <PageHeader title='Link' />
      {groups.map((group) => (
        <LinkList title={group}>
          {JihenLinks.filter((item) => item.group === group).map((item) => (
            <LinkItemWithIcon icon={item.icon} href={item.link}>
              {item.text}
            </LinkItemWithIcon>
          ))}
        </LinkList>
      ))}
    </LinkContainer>
  );
};

export default Link;
