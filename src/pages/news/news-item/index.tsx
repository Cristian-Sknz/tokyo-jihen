import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NewsDate, NewsListItem, NewsTitle, PlayIcon } from '../styled';

type NewsItemType = {
  title: string;
  date: string;
};

type NewsProps = {
  item: NewsItemType;
  onClick?(): void
};

const NewsItem: React.FC<NewsProps> = (props) => {
  return (
    <NewsListItem onClick={props.onClick}>
      <PlayIcon>
        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
      </PlayIcon>
      <NewsTitle>{props.item.title}</NewsTitle>
      <NewsDate>[{props.item.date}]</NewsDate>
    </NewsListItem>
  );
};

export default NewsItem;
