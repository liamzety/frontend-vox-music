import styled from 'styled-components';

export const PlaylistPreviewContainer = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 color:${({theme}) => theme.chipBorder};
 margin: 25px 0;
 &:not(:last-child) {
  margin-right:50px;
 }

 &:hover {
   transform: scale(0.95);
  }

  `;
  interface CardTopContainerProps {
    src:string
  }
export const CardTopContainer = styled.div<CardTopContainerProps>`
  width:200px;
  height:150px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
   background-blend-mode: multiply;
  background-image:url(${({src}) => src});
  background-position: center;
  background-size: cover;

`
export const CardBottomContainer = styled.div`
width: 200px;
height: 100px;
background-color: ${({theme}) => theme.chipBorder};
padding: 0 15px;
display:flex;
align-items: center;
justify-content: space-between;
padding: 0 25px;
p {
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
}


  `;

