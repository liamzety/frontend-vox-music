import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { neon } from '../../assets/style/main';

interface Props {
  size?: string;
  color?: keyof typeof GlobalVars;
  bold?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  underline?: boolean;
  active?: boolean;
}
export const TextStyle = styled.p<Props>`
    width: fit-content;
    font-family: Bicubik,MPLUS ; 
     text-transform:${({ uppercase }) => (uppercase ? 'uppercase' : '')};
     text-transform:${({ capitalize }) => (capitalize ? 'capitalize' : '')};
    color: ${({ theme, color }) => (color ? GlobalVars[color] : theme.mainTxt)};
    font-weight:${({ bold = true }) => (bold ? '700' : '400')};

    color:${({ active }) => active && GlobalVars.pinkMain};
    background: ${({ active }) =>
      active && `${fade(GlobalVars.pinkMain, 0.2)}`};
    border: ${({ active }) => active && `2px solid ${GlobalVars.pinkMain}`};   
    padding : ${({ active }) => active && '10px'}; 

    ${({ underline, theme }) =>
      underline &&
      `border-bottom: 2px solid ${theme.mainTxt};
    padding-bottom: 10px;
    position: relative;
    &::before {
    content: "";
    width: 20%;
    height: 0;
    border-width: 8px 8px 0 8px;
    border-style: solid;
    border-color: ${theme.mainTxt} transparent ${theme.mainTxt} ${theme.mainTxt};
    position: absolute;
    bottom: -8px;
    left: 0;`}
    }

    &.banner-title {
        font-size: ${({ size }) => size || '5.5rem'};
         color: ${({ theme }) => theme.bannerTitle};
    }
    &.banner-sub-title {
        font-size: ${({ size }) => size || '2rem'};
        color: ${({ theme }) => theme.bannerTitle};
    }
    &.h1 {
        font-size: ${({ size }) => size || '2.8rem'};
    }
    &.h2 {
        font-size: ${({ size }) => size || '2.2rem'};
    }
    &.h3 {
        font-size: ${({ size }) => size || '1.8rem'};
    }
    &.h4 {
        font-size: ${({ size }) => size || '1.3rem'};
    }
    &.p {
        font-size: ${({ size }) => size || '1.1rem'};
        font-weight:${({ bold }) => (bold ? '700' : '400')};
        font-family: Tomorrow-Regular,MPLUS ;
    }
    &.a {
        font-size: ${({ size }) => size || '1rem'};
        font-weight:${({ bold = false }) => (bold ? '700' : '400')};
        border-bottom:${({ active }) => !active && '2px solid transparent'}; 
        position:relative;
        ${({ active, theme, color }) =>
          !active &&
          `
        color: ${theme.linkTxt};

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -10px;
            left: 0;
            background-color: ${color ? theme[color] : theme.linkTxt};
            visibility: hidden;
            transform: scaleX(0);
            transition: .2s linear;
            }
            &:hover:before {
            visibility: visible;
            transform: scaleX(1);
            }
            `}  
        
        
    }

    &.logo {
        font-size:2.8rem;
        ${neon()};
    }
 
 
    `;
