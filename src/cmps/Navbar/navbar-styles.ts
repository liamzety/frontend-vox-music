import styled from 'styled-components';

import {remConverter} from '../../assets/style/main';

interface Props {
  isTopPage:boolean
}
export const NavbarContainer = styled.nav<Props>`
    transition: .2s linear;
    background:${({isTopPage,theme}) => isTopPage ? 'transparent' : `url(${theme.materialBg})`};
    background-size:150px;
    box-shadow:${({isTopPage}) => isTopPage ? 'none' : ` 0px -7px 26px 2px black`} ;
    position:fixed;
    width:100%;
    height:50px;
    z-index:9;
    svg {
      margin-right:5px;
      color: ${({isTopPage,theme}) => isTopPage ? theme.navbarTxtTop : theme.navbarTxt};
    }
  `;
export const NavbarContainerInner = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   height:100%;
  `;
export const NavOptionsContainer = styled.div<Props>`
   display:flex;
   align-items:center;
   color: ${({isTopPage,theme}) => isTopPage ? theme.navbarTxtTop : theme.navbarTxt};
   & > *:not(:last-child) {
     margin-right:25px;
   }
 
  `;

export const Logo = styled.div<Props>`
   width:50px;
   height:50px;
   background-image: url(${({isTopPage,theme}) => isTopPage ? theme.navbarLogoTop : theme.navbarLogo});
   background-size: cover;
  `;