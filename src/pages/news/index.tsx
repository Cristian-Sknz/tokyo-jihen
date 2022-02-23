import React from 'react';
import PageHeader from '../../components/template/page-title/header';
import ScrollIcon from '../../components/template/scroll-icon';
import { NewsContainer, NewsList } from './styled';
import NewsJson from '../../assets/news.json';
import NewsItem from './news-item';
import NewsImage from '../../components/template/page-image';

const News: React.FC = () => {
  return (
    <NewsContainer>
      <NewsImage src={'/images/news/news_image_spaced.png'} alt={'Tokyo Jihen News Wallpaper'} loading={'eager'}/>
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
