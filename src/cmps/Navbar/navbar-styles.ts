import styled from 'styled-components';
interface Props {
  isTopPage:boolean
}
export const NavbarContainer = styled.nav<Props>`
    background:${({isTopPage,theme}) => isTopPage ? 'transparent' : theme.navbar};
    box-shadow:${({isTopPage,theme}) => isTopPage ? 'none' : `0px -7px 26px -4px  ${theme.neon}`} ;
    position:fixed;
    width:100%;
    height:50px;
    z-index:9;
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