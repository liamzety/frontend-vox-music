import styled from 'styled-components';

export const PlaylistPreviewContainer = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 background:grey;
 margin: 25px 0;
 &:not(:last-child) {
  margin-right:50px;
 }
 a {
   width:150px;
   display:flex;
   flex-direction:column;
   align-items:center;
 }
  `;

export const PlaylistPreviewThumbnail = styled.img`
 width:50px;
  `;
