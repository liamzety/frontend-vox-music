import styled from 'styled-components';
interface Props {
  justifyCenter: string;
  wrap:string;
}
export const PlaylistListContainer = styled.section<Props>`
  display: flex;
  align-items:center;
  justify-content: ${props => props.justifyCenter};
  flex-wrap: ${props => props.wrap};
  overflow:overlay;
  min-height:200px;
  margin:0 50px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width:1px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
  
  }
  `;
export const PlaylistListContainerGrid = styled.div`
 display:grid;
 grid-template-columns:repeat(auto-fit, minmax(150px,1fr) );
 grid-gap:25px;
 min-height:200px;

  `;
