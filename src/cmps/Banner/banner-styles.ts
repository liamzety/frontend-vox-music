import styled from 'styled-components';
interface BannerWallpaperProps {
    opacity: string;
  }
export const BannerContainer = styled.section`
padding-top:50px;
height:100vh;
background-position:center;
background-size:cover;
display:flex;
justify-content:center;

`;
export const BannerContainerInner = styled.div`
display:flex;
align-items:center;
flex-direction:column;
height:70%;
margin-top: 50px;
line-height:2;
z-index:1;
`;
export const BannerWallpaperContainer = styled.div`
background:black;
position:absolute;
width:100%;
height:100%;
top:0;
left:0;

`;
export const BannerWallpaper = styled.img<BannerWallpaperProps>`
transition:2.5s;
opacity: ${props => props.opacity};
`;

