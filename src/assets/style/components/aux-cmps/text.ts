import styled from 'styled-components';

interface Props {
    size?: string;
    color?:string;
    bold?:boolean;
  }
export const TextStyle = styled.p<Props>`
    &.h1 {
        font-size:3rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${props => props.color ? props.color : ({theme}) =>  theme.mainTxt};
    
    }
    &.h2 {
        font-size:2.5rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${props => props.color ? props.color : ({theme}) =>  theme.mainTxt};
    }
    &.h3 {
        font-size:2rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${({ theme }) => theme.mainTxt};
         color: ${props => props.color ? props.color : ({theme}) =>  theme.mainTxt};
    
    }
    &.h4 {
        font-size:1.5rem;
        font-weight:${({bold = true} ) => bold ? '700' : '400'};
         color: ${props => props.color ? props.color : ({theme}) =>  theme.mainTxt};
    }
    &.p {
        font-size: ${props => props.size || '1rem'};
        font-weight:${({bold = false} ) => bold ? '700' : '400'};
        color: ${props => props.color ? props.color : ({theme}) =>  theme.mainTxt};
    }
    `