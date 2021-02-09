import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

export const UserAddImgLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 30%;
  min-width: 125px;
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
  @media (max-width: 550px) {
    align-self: flex-start;
  }
`;
