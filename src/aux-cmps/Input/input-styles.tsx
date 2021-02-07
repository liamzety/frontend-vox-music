import styled from 'styled-components';

export const InputStyle = styled.input`
  padding: 10px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.mainTxt};
  color: ${({ theme }) => theme.mainTxt};
`;
