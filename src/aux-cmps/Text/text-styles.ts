import styled from 'styled-components';
import {  neon } from '../../assets/style/main';

interface Props {
    size?: string;
    color?:string;
    bold?:boolean;
    uppercase?:boolean;
  }
export const TextStyle = styled.p<Props>`
    &.banner-title {
        font-size: ${props => props.size || '5.5rem'};
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${({theme} ) => theme.bannerTitle};
         font-family: Bicubik ;
         text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.banner-sub-title {
        font-size: ${props => props.size || '2rem'};
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
        color: ${({theme} ) => theme.bannerTitle};
         font-family: Bicubik ;
         text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.h1 {
        font-size: ${props => props.size || '2.8rem'};
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
          font-family: Bicubik ;
         text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.h2 {
        font-size: ${props => props.size || '2.2rem'};
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
          font-family: Bicubik ;
          text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.h3 {
        font-size: ${props => props.size || '1.8rem'};
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
        font-family: Bicubik ;
        text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.h4 {
        font-size: ${props => props.size || '1.3rem'};
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
          font-family: Bicubik ;
           text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.p {
        font-size: ${props => props.size || '1rem'};
        font-weight:${({bold = false} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
        font-family: Tomorrow-Regular ;
         text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.a {
        font-size: ${props => props.size || '1rem'};
        font-weight:${({bold = false} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
        font-family: Bicubik ; 
         text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
    }
    &.logo {
        font-size:2.8rem;
        font-family: Bicubik ; 
         text-transform:${uppercase =>  uppercase ? 'uppercase' : ''};
        ${neon()};
    }
 
 
    `