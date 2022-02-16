import React from 'react';
import PageHeader from '../../components/template/page-title/header';
import ScrollIcon from '../../components/template/scroll-icon';
import { NewsContainer, NewsImage, NewsImageContainer, NewsList } from './styled';
import NewsJson from '../../assets/news.json';
import NewsItem from './news-item';

const News: React.FC = () => {
  return (
    <NewsContainer>
      <NewsImageContainer>
        <NewsImage src={'/images/news/news_image.png'} />
      </NewsImageContainer>
      <ScrollIcon />
      <PageHeader title='News' />
      <NewsList>
        {NewsJson.map((news, key) => (
          <NewsItem item={news} key={key}></NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
};

export default News;
