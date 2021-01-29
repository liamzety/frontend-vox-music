import { fade } from '@material-ui/core';
import styled from 'styled-components';

export const AutoSuggestUl = styled.ul`
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  background: ${({ theme }) => fade(theme.mainBg, 0.98)};
  z-index: 1;
`;
export const SuggestedContainer = styled.div`
  padding: 10px;
  transition: 0.2s linear;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.secBg};
  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;
