import { fade, lighten } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { retroTvEffect } from '../../assets/style/main';

interface MenuStylesProps {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  hideBorderTop?: boolean;
}
export const MenuStyles = styled.div<MenuStylesProps>`
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  max-width: calc(100vw - 85px);
  display: flex;
  flex-direction: column;
  padding: 5px;
  background: ${({ theme }) => theme.mainBg};
  border: 3px solid ${({ theme }) => fade(theme.mainBorder, 0.8)} };
  border-top:${({ hideBorderTop }) => (hideBorderTop ? 0 : '')};
  box-shadow: ${({ theme }) => theme.menuShadow};
  top:${({ top }) => top};
  right:${({ right }) => right};
  bottom:${({ bottom }) => bottom};
  left:${({ left }) => left};
  z-index: 12;
`;
interface MenuItemProps {
  center?: boolean;
}
export const MenuItem = styled.div<MenuItemProps>`
  padding: 10px;
  display: flex;
  align-items: ${({ center }) => center && 'center'};
  justify-content: ${({ center }) => center && 'center'};
  cursor: pointer;
  color: ${({ theme }) => theme.mainTxt};
  transition: 0.1s linear;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    background: ${fade(GlobalVars.pinkMain, 0.1)};
    ${retroTvEffect}
  }
`;
interface MenuItemSpanProps {
  cb: () => void;
}
export const MenuItemSpan = styled.span<MenuItemSpanProps>``;
