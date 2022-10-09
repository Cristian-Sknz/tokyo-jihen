import React, { useRef } from 'react';

import PageHeader from '../../components/template/page-title/header';
import ScrollIcon from '../../components/template/scroll-icon';
import NewsImage from '../../components/template/page-image';
import Popup, { PopupHandler } from "../../components/ui/main/popup";
import NewsJson from '../../assets/news.json';
import NewsItem from './news-item';
import { NewsContainer, NewsList } from './styled';

const News: React.FC = () => {
  const ref = useRef<PopupHandler>(null);
  return (
    <React.Fragment>
      <Popup ref={ref}/>
      <NewsContainer>
        <NewsImage 
          srcSet={[
            '/images/news/news_image_768.png 768w',
            '/images/news/news_image_1024.png 1024w',
            '/images/news/news_image_1536.png 1536w',
            '/images/news/news_image_2560.png 2560w'
          ]}
          sizes={'100vw'}
          src={'/images/news/news_image_1536.png'} 
          alt={'Tokyo Jihen News Wallpaper'} 
          loading={'eager'}/>
        <ScrollIcon />
        <PageHeader title='News' />
        <NewsList>
          {NewsJson.map((news, key) => (
            <NewsItem item={news} key={key} onClick={() => {
              ref.current?.open(news.id)
            }}/>
          ))}
        </NewsList>
      </NewsContainer>
    </React.Fragment>
  );
};

export default News;
