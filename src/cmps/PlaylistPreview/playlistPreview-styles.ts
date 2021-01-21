import styled from 'styled-components';
interface Props {
  src:any
}
export const PlaylistPreviewContainer = styled.div<Props>`
 display:flex;
 flex-direction:column;
 align-items:center;
 background-image:url(${({src}) => src});
 color:${({theme}) => theme.chipBorder};
 margin: 25px 0;
 &:not(:last-child) {
  margin-right:50px;
 }

 &:hover {
   transform: scale(0.95);
  }
  `;
export const CardTopContainer = styled.div`
  width:200px;
  height:150px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding:5px;
  background-color:${({theme}) => theme.chipTint};
`
export const CardBottomContainer = styled.div`
width: 200px;
height: 100px;
background-color: ${({theme}) => theme.chipBorder};
padding: 0 15px;
display:flex;
align-items: center;
justify-content: space-between;
svg {

}
  `;

