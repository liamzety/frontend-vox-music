import styled from 'styled-components';

interface Props {
  cb: () => void;
}
export const SuggestedContainer = styled.span<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;
