import styled from 'styled-components';
interface Props {
  justifyCenter: string;
  wrap: string;
}
export const PlaylistListStyle = styled.section`
  & > div {
    margin-bottom: 50px;
  }
`;
export const PlaylistListWrapper = styled.div`
  position: relative;
`;
export const PlaylistListContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyCenter};
  flex-wrap: ${(props) => props.wrap};
  overflow: overlay;
  min-height: 200px;
  margin: 0 50px;
  scroll-behavior: smooth;

  @media (max-width: 520px) {
    margin: 0;
    svg {
      display: none;
    }
  }
  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
