import styled from 'styled-components';
interface Props {
  justifyCenter: string;
  wrap:string;
}
export const PlaylistListStyle = styled.section`
.genre-list-container {
  p.h3 {
      border-bottom: 2px solid ${(({theme}) => theme.mainTxt)};
      padding-bottom: 10px;
      position: relative;
    
      &::before {
        content: "";
        width: 20%;
        height: 0;
        border-width: 8px 8px 0 8px;
        border-style: solid;
        border-color: ${(({theme}) => theme.mainTxt)} transparent ${(({theme}) => theme.mainTxt)} ${(({theme}) => theme.mainTxt)};
        position: absolute;
        bottom: -8px;
        left: 0;
    }
  }
}
& > div {
  margin-bottom: 50px;
}
`
export const PlaylistListContainer = styled.div<Props>`
  display: flex;
  align-items:center;
  justify-content: ${props => props.justifyCenter};
  flex-wrap: ${props => props.wrap};
  overflow:overlay;
  min-height:200px;
  margin:0 50px;
  scroll-behavior: smooth;

  @media(max-width:520px) {
    margin:0;
    svg {
      display:none;
    }
  }
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
