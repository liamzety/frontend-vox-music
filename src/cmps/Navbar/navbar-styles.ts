import styled from 'styled-components';
import { neon } from '../../assets/style/global';
interface Props {
  isTopPage:boolean
}
export const NavbarContainer = styled.nav<Props>`
    background:${({isTopPage,theme}) => isTopPage ? 'transparent' : `url(${theme.materialBg})`};
    background-size:150px;
    box-shadow:${({isTopPage}) => isTopPage ? 'none' : ` 0px -7px 26px 2px black`} ;
    position:fixed;
    width:100%;
    height:50px;
    z-index:9;
    svg {
      margin-right:5px;
    }
  `;
export const NavbarContainerInner = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   height:100%;
  `;
export const NavOptionsContainer = styled.div`
   display:flex;
   align-items:center;
   & > *:not(:last-child) {
     margin-right:25px;
   }
 
  `;