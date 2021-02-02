import { darken } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  color?: string;
  pointer?: boolean;
  className?: string;
  size: string;
}
export const SvgStyle = styled.span<Props>`
  display: flex;
  svg {
    transition: 0.1s;
    color: ${({ color, theme }) => (color ? theme[color] : theme.mainSvg)};
    font-size: ${({ size }) => size};
    cursor: ${({ pointer }) => pointer && 'pointer'};

    &:hover {
      ${({ pointer, color, theme }) =>
        pointer &&
        `color: ${darken(color ? theme[color] : theme.mainSvg, 0.2)};`};
    }
  }
`;
