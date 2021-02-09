import styled from 'styled-components';

interface Props {}
export const SelectStyle = styled.select<Props>`
  padding: 15px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.inputBorder};
  color: ${({ theme }) => theme.inputTxt};
  text-transform: uppercase;
  font-family: Tomorrow-Regular;
  transition: 0.2s;
  &:hover,
  &:focus {
    filter: saturate(0.5);
  }
`;
export const SelectOption = styled.option<Props>`
  background: ${({ theme }) => theme.mainBg};
  text-transform: uppercase;
  font-family: Tomorrow-Regular;
`;
