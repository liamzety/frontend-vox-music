import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/global';

interface Props {
    size?: string;
    color?:string;
    bold?:boolean;
  }
export const TextStyle = styled.p<Props>`
    &.banner-title {
        font-size:5.5rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${GlobalVars.yellowMain};
    
    }
    &.banner-sub-title {
        font-size:2rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${GlobalVars.yellowMain};
    
    }
    &.h1 {
        font-size:2.8rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
    
    }
    &.h2 {
        font-size:2.2rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
    }
    &.h3 {
        font-size:1.8rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
    
    }
    &.h4 {
        font-size:1.3rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
          color: ${({theme,color}) =>  theme[color]};
    }
    &.p {
        font-size: ${props => props.size || '1rem'};
        font-weight:${({bold = false} ) => bold ? '700' : '400'};
        color: ${({theme,color}) =>  theme[color]};
    }
    `