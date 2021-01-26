
import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
interface Props {
  isPlayerHidden:boolean
}
export const PlayerWrapper = styled.div<Props>`
  .toggle-player {
    cursor:pointer;
    transition:.2s;
    position: fixed;
    width: 30px;
    height: 30px;
    bottom: ${({isPlayerHidden}) => isPlayerHidden ? '15px' : '70px'};
    left: 0;
    right: 0;
    margin: auto;
    transform: ${({isPlayerHidden}) => isPlayerHidden ? 'translateY(10px)' : ''};

    @media (max-width:750px) {
      bottom: 110px;
    transform: ${({isPlayerHidden}) => isPlayerHidden ? 'translateY(105px)' : ''};

    }
    @media (max-width:550px) {
      bottom: 150px;
    transform: ${({isPlayerHidden}) => isPlayerHidden ? 'translateY(120px)' : ''};

  }
   svg  {
    color:${({theme}) => theme.mainTxt};
    opacity:0.3;
    transition:.2s;
    &:hover {
    opacity:0.8;

    }
  }
}
  
  `;
export const PlayerContainer = styled.div`
    position:fixed;
    bottom: 0;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color: black;
    padding: 10px 50px;

    --aug-t-extend1: 60px;
    --aug-t: 6px;
    --aug-tr: 10px;
    --aug-tl: 10px;
    --aug-border: initial;
     --aug-border-top: 4px;
     --aug-border-bottom: 0.01px;
     --aug-border-left: 0.01px;
     --aug-border-right: 0.01px;
  --aug-border-bg: radial-gradient(circle, ${({theme}) => fade(theme.playerMain,0.8)} 35%, rgba(11,10,10,0.8872408826811975) 100%);;
 
    & > *:not(span) {
      color:${({theme}) => theme.playerMain};
    }
    span svg {
      color:${({theme}) => theme.playerSec};
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
      &:hover {
        opacity:0.8;
      }
      &:active {
        transform: scale(0.88);
      }
    }

    input[type=range] {

        -webkit-appearance: none;
        width: 120px;
        height: 10px;
        background: #242424;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        border-radius: 5px; 

        &.volume-input {
          width: 50px;
          transform: rotate(270deg);
        }
      &hover {
        opacity: 1;
      }
      
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%; 
        background: ${GlobalVars.whiteMain};
        cursor: pointer;
      }
      &::-moz-range-thumb {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: ${GlobalVars.whiteMain};
        cursor: pointer;
      }
    }
    
    &.hide-player {
      transform: translateY(60px) !important;
    }
    @media (max-width:750px) {
      flex-direction: column;
      &.hide-player {
        transform: translateY(100px) !important;
      }
    }
    @media (max-width:550px) {
      padding: 15px;
      &.hide-player {
        transform: translateY(120px) !important;
      }
     
    }
  `;
export const PlayerLeftColumn = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

 
  @media (max-width:550px) {
    margin-bottom: 10px;
    padding: 0 20px;
  }
 
  `;
export const PlayerRightColumn = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  & > *:not(:last-child) {
    margin-right:10px;
  }

  @media (max-width:550px) {
    width:100%;
    flex-direction: column;
   
    .volume-input, .mute-btn {
      display:none;
    }
  }
 
  `;

export const PlayerDurationContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
input[type=range] {
  &.duration-input {
    margin:0 25px;
    min-width:125px;
    width:100%;

    @media (max-width:550px) {
      margin-bottom: 10px;
    }
  }
}
  `;

export const PlayerPlaylistImg = styled.img`
width: 80px;
height: 50px;
border-radius: 5px;
margin-right:15px
  `;