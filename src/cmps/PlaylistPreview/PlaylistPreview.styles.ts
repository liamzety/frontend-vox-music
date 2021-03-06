import { darken } from '@material-ui/core';
import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';

export const PlaylistPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.chipBorder};
  margin: 25px 0;
  margin-right: ${remConverter(50)};
  transition: 0.2s linear;

  // Fixes the text flickering on hover because of  transform: scale bug
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;

  --aug-border-bottom: 4px;
  --aug-border-top: 1px;
  --aug-border-left: 1px;
  --aug-border-right: 4px;

  &:hover {
    transform: scale(0.95);
  }
`;
interface CardTopContainerProps {
  src: string;
}
export const CardTopContainer = styled.div<CardTopContainerProps>`
  width: ${remConverter(200)};
  height: ${remConverter(150)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-blend-mode: multiply;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => darken(theme.chipTrunk, 0.8)};
  background-blend-mode: normal;
`;
export const CardBottomContainer = styled.div`
  width: ${remConverter(200)};
  height: ${remConverter(100)};
  background-color: ${({ theme }) => darken(theme.chipTrunk, 0.8)};
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
