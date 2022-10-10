import React, { useEffect, useState } from 'react';
import ReleaseAlbum, { Album } from '../../../components/template/release-album';
import ReleaseList from '../../../assets/discography/release.json';
import Loading from '../../../components/template/loading';
import { DiscographyContainer } from '../styled';

type ReleaseData = Album & {
  markdown: string;
};

const DiscographyRelease: React.FC = () => {
  const [releases, setReleases] = useState<ReleaseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      ReleaseList.map(async (item) => {
        return fetch(item.content)
          .then((response) => response.text())
          .then((markdown) => ({ ...item, markdown }));
      })
    ).then((releases) => {
      setReleases(releases);
      setLoading(false);
    });
  }, []);

  return (
    <DiscographyContainer className='release'>
      {loading ? (
        <Loading />
      ) : (
        releases.map((item) => (
          <ReleaseAlbum key={item.name} item={item} markdown={item.markdown} />
        ))
      )}
    </DiscographyContainer>
  );
};

export default DiscographyRelease;
