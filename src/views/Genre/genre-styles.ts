import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';

export const GenreContainer = styled.div`
display: flex;
max-width: 600px;
margin:auto ${remConverter('50px')};
overflow: overlay;
scroll-behavior: smooth;

a {
  min-width: 8rem;
  border: 2px solid transparent;
}
a:not(:last-child) {
    width:fit-content;
    margin-right:100px;
}
&::-webkit-scrollbar {
    width:1px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
  
  }
`