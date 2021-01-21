import styled from 'styled-components';

export const GenreContainer = styled.div`
display: flex;
max-width: 600px;
margin:auto 50px;
overflow: overlay;
scroll-behavior: smooth;

a:not(:last-child) {
    width:fit-content;
    min-width: 80px;
    margin-right:100px;
}
&::-webkit-scrollbar {
    width:1px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
  
  }
`