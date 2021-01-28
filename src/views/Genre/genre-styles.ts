import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';

export const GenreHeader = styled.div`
  margin-bottom: 45px;
  p.a {
    margin-bottom: 20px;
  }
`;
export const GenreListWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
`;

export const GenreContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin: auto ${remConverter(50)};
  overflow: overlay;
  scroll-behavior: smooth;

  a {
    min-width: 8rem;
    border: 2px solid transparent;
  }

  a:not(:last-child) {
    width: fit-content;
    margin-right: ${remConverter(100)};
  }
  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
