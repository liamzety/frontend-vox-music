import styled from 'styled-components';
export const PlaylistAddModalStyles = styled.div`
position:fixed;
background-color: ${({theme}) => theme.mainModal};
top:0;
bottom:0;
right:0;
left:0;
margin:auto;
width:50vw;
height:50vh;
box-shadow:${({theme}) =>  `0px 0px 19px -9px  ${theme.neonModal}`} ;
z-index:11;
@media (max-width: 1080px) {
    width:90vw;
}
`;