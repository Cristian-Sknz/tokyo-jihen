import React, { useRef } from 'react';
import PageHeader from '../../components/template/page-title/header';
import ScrollIcon from '../../components/template/scroll-icon';
import { NewsContainer, NewsList } from './styled';
import NewsJson from '../../assets/news.json';
import NewsItem from './news-item';
import NewsImage from '../../components/template/page-image';
import Popup, { PopupHandler } from "../../components/ui/main/popup";

const News: React.FC = () => {
  const ref = useRef<PopupHandler>(null);
  return (
    <React.Fragment>
      <Popup ref={ref}/>
      <NewsContainer>
        <NewsImage src={'/images/news/news_image.png'} alt={'Tokyo Jihen News Wallpaper'} loading={'eager'}/>
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
