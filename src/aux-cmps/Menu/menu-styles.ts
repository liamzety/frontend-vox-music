import { darken, lighten } from '@material-ui/core';
import styled from 'styled-components';

export const MenuStyles = styled.div`
  position: fixed;
  width: 120px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background: ${({ theme }) => theme.mainBg};
  top: 80px;
  right: 90px;
  z-index: 11;
`;
export const MenuItem = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.mainTxt};
  transition: 0.1s linear;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    background: ${({ theme }) => lighten(theme.mainBg, 0.1)};
  }
`;
