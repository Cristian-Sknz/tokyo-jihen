import React from 'react';
import PageHeader from '../../components/template/page-title/header';
import { LinkContainer, LinkItemWithIcon } from './styled';
import LinkList from './title';
import JihenLinks from '../../assets/links.json';


type LinkItemType = Omit<typeof JihenLinks[number], ''>;

function groupsBy<T>(items: Array<T>, keyExtractor: (item: T) => string) {
  var map = {} as { [key: string]: T[]};
  for (var item of items) {
    var key = keyExtractor(item);
    
    if (Object.hasOwn(map, key)) {
      map[key] = [...map[key], item]
      continue;
    }

    map[key] = item == null ? [] : [item]
  }

  return map;
}


const Link: React.FC = () => {
  const groups = groupsBy<LinkItemType>(JihenLinks, (item) => item.group);

  return (
    <LinkContainer>
      <PageHeader title='Link' />
      {Object.entries(groups).map(([str, obj]) => (
        <LinkList title={str}>
            {obj.map((item) => (
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
