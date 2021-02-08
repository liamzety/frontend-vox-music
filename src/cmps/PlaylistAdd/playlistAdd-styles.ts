import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

export const PlaylistAddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 25px 25%;
  & > * {
    width: 100%;
  }
`;
export const PlaylistAddImgLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  --aug-b: 6px;
  --aug-t: 6px;
  --aug-b-extend1: 60px;
  --aug-t-extend1: 60px;
  --aug-border-all: 2px;

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    --aug-border-bg: ${GlobalVars.pinkMain};
    transform: scale(1.02);
  }
`;
