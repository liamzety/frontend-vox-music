import styled from 'styled-components';
import {  neon } from '../../assets/style/main';

interface Props {
    size?: string;
    color?:string;
    bold?:boolean;
  }
export const TextStyle = styled.p<Props>`
    &.banner-title {
        font-size:5.5rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${({theme} ) => theme.bannerTitle};
         font-family: Bicubik ;
    
    }
    &.banner-sub-title {
        font-size:2rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
        color: ${({theme} ) => theme.bannerTitle};
         font-family: Bicubik ;
    
    }
    &.h1 {
        font-size:2.8rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
          font-family: Bicubik ;
    
    }
    &.h2 {
        font-size:2.2rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
          font-family: Bicubik ;
    }
    &.h3 {
        font-size:1.8rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
        font-family: Bicubik ;
    
    }
    &.h4 {
        font-size:1.3rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
          font-family: Bicubik ;
    }
    &.p {
        font-size: ${props => props.size || '1rem'};
        font-weight:${({bold = false} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
        font-family: Tomorrow-Regular ;
    }
    &.a {
        font-size: ${props => props.size || '1rem'};
        font-weight:${({bold = false} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
        font-family: Bicubik ; 
    }
    &.logo {
        font-size:2.8rem;
        font-family: Bicubik ; 
        ${neon()};
    }
 
 
    `