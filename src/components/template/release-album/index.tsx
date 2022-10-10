import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCloudArrowDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import Markdown from '../../ui/markdown';
import AlbumTable, { AlbumTableProps } from './album-table';
import {
  Button,
  ImageContainer,
  MarkdownContainer,
  ReleaseAlbumContainer,
  ReleaseContent,
  ReleaseImage,
  RowContainer,
  ButtonIcon,
  ButtonLink,
  Buttons,
} from './styled';

export type Album = {
  name: string;
  content: string;
  image: string;
  steaming?: string | null;
  shop?: string | null;
  tables: AlbumTableProps[];
};

type ReleaseAlbumProps = {
  item: Album;
  markdown: string;
};

const SUTORIIMINGU = 'ストリーミング・ダウンロードはこちら';
const KOONYUU = '購入はこちら';

const ReleaseAlbum: React.FC<ReleaseAlbumProps> = ({ item, markdown }) => {
  return (
    <ReleaseAlbumContainer>
      <RowContainer>
        <ImageContainer>
          <ReleaseImage src={item.image} />
        </ImageContainer>
        <ReleaseContent>
          <MarkdownContainer>
            <Markdown>{markdown}</Markdown>
          </MarkdownContainer>
          <Buttons>
            {item.steaming && (
              <AlbumButton
                href={item.steaming}
                icon={faCloudArrowDown}
                text={SUTORIIMINGU}
              />
            )}
            {item.shop && (
              <AlbumButton
                href={item.shop}
                icon={faCartShopping}
                text={KOONYUU}
              />
            )}
          </Buttons>
        </ReleaseContent>
      </RowContainer>
      {item.tables.map((value, index) => (
        <AlbumTable key={index} {...value} />
      ))}
    </ReleaseAlbumContainer>
  );
};

type ButtonProps = {
  icon: IconDefinition;
  href: string;
  text: string;
};

function AlbumButton(props: ButtonProps) {
  return (
    <Button>
      <ButtonLink href={props.href}>
        <ButtonIcon>
          <FontAwesomeIcon
            style={{ verticalAlign: 'text-bottom' }}
            color='#65635c'
            icon={props.icon}
          />
        </ButtonIcon>
        <span>{props.text}</span>
      </ButtonLink>
    </Button>
  );
}

export default ReleaseAlbum;
