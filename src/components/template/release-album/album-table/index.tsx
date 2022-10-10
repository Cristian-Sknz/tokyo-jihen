import React from 'react';
import {
  AlbumTableContainer,
  TableSubtitle,
  TableTitle,
  Table,
  TableRow,
  RowItem,
} from './styled';

export type AlbumTableProps = {
  title: string | null;
  subtitle: string | null;
  songs: Song[];
};

type Song = {
  name: string;
  streaming: string[];
};

const AlbumTable: React.FC<AlbumTableProps> = (props) => {
  return (
    <AlbumTableContainer>
      {props.title && <TableTitle>{props.title}</TableTitle>}
      {props.subtitle && (
        <TableSubtitle>
          {props.subtitle.split('\n').map((value) => (
            <span key={value}>{value}</span>
          ))}
        </TableSubtitle>
      )}
      <Table>
        <tbody>
          {props.songs.map((value, index) => (
            <TableRow key={value.name}>
              <RowItem>
                <p>{index + 1}</p>
              </RowItem>
              <RowItem>
                {value.name.split('\n').map((value) => (
                  <p key={value}>{value}</p>
                ))}
              </RowItem>
              <RowItem></RowItem>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </AlbumTableContainer>
  );
};

export default AlbumTable;
