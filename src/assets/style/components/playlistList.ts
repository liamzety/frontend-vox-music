import styled from 'styled-components';
interface Props {
  justifyCenter: string;
  wrap:string;
}
export const PlaylistListContainer = styled.div<Props>`
  display: flex;
  align-items:center;
  justify-content: ${props => props.justifyCenter};
  flex-wrap: ${props => props.wrap};
  overflow:hidden;
  min-height:200px;
  margin:0 50px;
  scroll-behavior: smooth;
  `;
export const PlaylistListContainerGrid = styled.div`
 display:grid;
 grid-template-columns:repeat(auto-fit, minmax(150px,1fr) );
 grid-gap:25px;
 min-height:200px;
  `;
export const SlideBtnRight = styled.div`
  position: absolute;
  right: 15px;
  svg {
    cursor:pointer;
    font-size:2rem;
    opacity:0.5;
    &:hover {
      opacity:0.8;
    }
  }
`;
export const SlideBtnLeft = styled.div`
  position: absolute;
  left: 15px;
  svg {
    cursor:pointer;
    font-size:2rem;
    opacity:0.5;
    &:hover {
      opacity:0.8;
    }
  }
`;