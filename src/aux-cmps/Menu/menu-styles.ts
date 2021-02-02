import { fade, lighten } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  hideBorderTop?: boolean;
}
export const MenuStyles = styled.div<Props>`
  position: ${({ position }) => position};
  width: 120px;
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
export const MenuItem = styled.div`
  padding: 10px;
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
    animation: retro-future-tv-lines linear infinite;
    animation-duration: 500ms;
    --playstate: var(--media-prefers-reduced-motion) paused;
    animation-play-state: var(--playstate, running);
    -webkit-mask-image: repeating-linear-gradient(
      black,
      black 0.5rem,
      rgba(0, 0, 0, 0.5) 0.75rem
    );
  }
`;