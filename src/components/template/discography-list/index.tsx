import React from 'react';
import { DiscoImage, DiscoItem, DiscoList, DiscoTitle } from './styled';

export type DiscographyItemProps = {
  title: string;
  image_url: string;
};

const DiscographyItem: React.FC<DiscographyItemProps> = (props) => {
  return (
    <DiscoItem>
      <DiscoImage src={props.image_url} />
      <DiscoTitle>{props.title}</DiscoTitle>
    </DiscoItem>
  );
};

type DiscographyListProps = {
  items: DiscographyItemProps[];
};

const DiscographyList: React.FC<DiscographyListProps> = ({ items }) => {
  return (
    <DiscoList>
      {items.map((item) => (
        <DiscographyItem
          key={item.title}
          title={item.title}
          image_url={item.image_url}
        />
      ))}
    </DiscoList>
  );
};

export default DiscographyList;
