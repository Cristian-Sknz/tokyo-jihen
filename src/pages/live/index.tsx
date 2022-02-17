import React from 'react';
import PageTitle from '../../components/template/page-title';
import LiveItem from './live-item';
import { LiveContainer, LiveList, PastLiveContainer, Title } from './styled';
import LiveJson from '../../assets/lives.json';

const Live: React.FC = () => {
  const lives = LiveJson.filter((item) => !item.past);
  const pastLives = LiveJson.filter((item) => item.past);

  return (
    <LiveContainer>
      <PageTitle>Live</PageTitle>
      <LiveList>
        {lives.map((live) => (
          <LiveItem item={live}></LiveItem>
        ))}
      </LiveList>
      <PastLiveContainer>
        <Title>Past Live</Title>
        <LiveList>
          {pastLives.map((live) => (
            <LiveItem item={live}></LiveItem>
          ))}
        </LiveList>
      </PastLiveContainer>
    </LiveContainer>
  );
};

export default Live;