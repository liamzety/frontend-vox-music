import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { remConverter, retroTvEffect } from '../../assets/style/main';
import { localImgService } from '../../services/localImgService';

interface Props {
  isPlaying: boolean;
}
export const PlayerWrapper = styled.div``;

export const BackgroundWrapper = styled.div<Props>`
  transition: 0.5s linear;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ isPlaying }) => (isPlaying ? '#00000073' : '#000000f5')};
  left: 0;
  top: 0;
  ${({ isPlaying }) => (isPlaying ? retroTvEffect : '')};
`;

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${localImgService.playerBg});
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px 50px 10px;

  touch-action: none;
  // Disables mobile scroll ^^^

  --aug-t-extend1: 60px;
  --aug-t: 6px;
  --aug-tr: 10px;
  --aug-tl: 10px;
  --aug-border: initial;
  --aug-border-top: 4px;
  --aug-border-bottom: 0.01px;
  --aug-border-left: 0.01px;
  --aug-border-right: 0.01px;
  --aug-border-bg: radial-gradient(
    circle,
    ${({ theme }) => fade(theme.playerMain, 0.8)} 35%,
    rgba(11, 10, 10, 0.8872408826811975) 100%
  );

  & > *:not(span) {
    color: ${({ theme }) => theme.playerMain};
  }
  span svg {
    color: ${({ theme }) => theme.playerSec};
  }
  p.h4 {
    white-space: nowrap;
  }
  p.h3 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    &:active {
      transform: scale(0.88);
    }
  }

  input[type='range'] {
    padding: 8px 1px;
    -webkit-appearance: none;
    width: 120px;
    height: 10px;
    background: ${GlobalVars.blackMain};
    outline: none;
    border-radius: 5px;

    --aug-border-bg: ${({ theme }) => theme.playerMain};
    --aug-border-all: 2px;

    &.volume-input {
      border: 2px solid ${({ theme }) => theme.playerMain};
      width: 50px;
      transform: rotate(270deg);
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 12px;
      height: 12px;
      background: ${({ theme }) => theme.playerSec};
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 12px;
      height: 12px;
      background: ${({ theme }) => theme.playerSec};
      cursor: pointer;
    }
  }
  .resizeable {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .top-handle {
    width: 50px !important;
    height: 20px !important;
    top: -10px !important;
    right: 0 !important;
    background: url(${localImgService.doubleLine}) !important;
    background-size: contain !important;
    margin: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }

  @media (max-width: 750px) {
    padding: 20px 10px 10px;
  }
`;
export const PlayerLeftColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    margin-bottom: 10px;
    padding: 0 20px;
  }
`;
export const PlayerRightColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    .volume-input,
    .mute-btn {
      display: none;
    }
  }
`;

export const PlayerDurationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  p {
    width: 120px;
    text-align: center;
  }
  input[type='range'] {
    &.duration-input {
      min-width: 125px;
      width: 100%;
    }
  }
`;

export const ClosePlayerBtnContainer = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 35px;
  top: -10px;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export const PlayerMini = styled.div`
  cursor: pointer;
  width: ${remConverter(80)};
  height: ${remConverter(80)};
  border-radius: 50%;
  background: ${GlobalVars.whiteMain};
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -4px 2px 10px #0000002e;
  &:before {
    transition: 0.2s;
    content: '';
    width: 65px;
    height: 65px;
    border-radius: 50%;
    position: absolute;
    border: 2px solid ${GlobalVars.whiteMain};
  }
  &:after {
    transition: 0.2s;
    content: '';
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid ${fade(GlobalVars.whiteMain, 0.3)};
  }
  svg {
    animation: pulsate-fwd 3s ease-in-out infinite both;
  }
  &:hover {
    animation: vibrate-1 0.3s linear infinite both;
    &:after {
      animation: expanding-circle 1s linear both;
    }
  }
`;
export const PlayerPlaylistImg = styled.img`
  width: 80px;
  height: 50px;
  border-radius: 5px;
  margin-right: 15px;
`;
