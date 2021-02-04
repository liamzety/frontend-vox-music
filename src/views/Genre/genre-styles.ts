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
  width: 100%;
  max-width: 800px;

  --aug-br: 8px;
  --aug-br-extend2: 50px;
  --aug-bl: 8px;
  --aug-bl-extend1: 50px;
  --aug-border: initial;
  --aug-border-bottom: 4px;
  --aug-border-top: 0px;
  --aug-border-left: 0px;
  --aug-border-right: 0px;
  --aug-border-bg: linear-gradient(
    180deg,
    rgba(84, 79, 10, 0) 70%,
    rgba(11, 10, 10, 0.8872408826811975) 79%,
    ${({ theme }) => theme.mainBorder} 100%
  );
  padding: 10px;
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
