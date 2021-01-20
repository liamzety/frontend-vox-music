import styled from 'styled-components';
interface Props {
   position?: 'absolute' | 'fixed';
   size?: string;
  }
  export const LoaderStyle = styled.div<Props>` {
    position: ${({position}) => position ? position : 'initial'};
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:10;
    img {
        width:${({size}) => (size ? size : '100%' )};
        height:${({size}) => (size ? size : '100%' )};
    }
  }
  `