import styled from 'styled-components';

export const AlbumTableContainer = styled.div`
  color: white;
  border: #72716a solid 1px;
  margin-bottom: 1rem;
  font-family: Noto Sans JP, sans-serif;
`;

export const TableTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem;
  padding-left: 1rem;
  background-color: #72716a;
`;

export const TableSubtitle = styled.h5`
  font-weight: 600;
  padding: 0.6rem 0.2rem;
  & > * {
    display: block;
    line-height: 1.34;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-top: 1px solid #72716a;
  text-align: center;
  display: flex;
  flex-direction: row;

  :nth-child(2n + 1) {
    background-color: #333;
  }
`;

export const RowItem = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-right: 1px solid #72716a;
  min-width: 10%;
  max-width: 110px;

  :nth-child(2) {
    flex: 1;
    text-align: left;
    max-width: none;
  }

  :last-child {
    border-right: none;
  }

  & > * {
    align-self: flex-start;
    display: block;
    line-height: 1.2;
  }
`;
