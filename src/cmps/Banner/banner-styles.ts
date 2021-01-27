import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';
interface BannerWallpaperProps {
  opacity: string;
}
export const BannerContainer = styled.section`
  padding-top: 50px;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;

  --aug-b-extend1: 60px;
  --aug-b: 6px;
  --aug-br: 10px;
  --aug-bl: 10px;
  --aug-border: initial;
  --aug-border-bottom: 4px;
  --aug-border-top: 0.01px;
  --aug-border-left: 0.01px;
  --aug-border-right: 0.01px;
  --aug-border-bg: radial-gradient(
    circle,
    ${({ theme }) => theme.mainBorder} 75%,
    rgba(11, 10, 10, 0.8872408826811975) 100%
  );
`;

export const BannerTitleContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50%;
  margin-top: 100px;
  line-height: 2;
  text-align: center;
  justify-content: space-between;
  z-index: 1;
  .banner-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export const BannerWallpaperContainer = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const BannerWallpaper = styled.img<BannerWallpaperProps>`
  position: fixed;
  transition: 2.5s;
  opacity: ${(props) => props.opacity};
`;
export const BannerLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: ${remConverter(100)};
  height: ${remConverter(100)};
  object-fit: contain;
`;
