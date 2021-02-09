import styled from 'styled-components';

interface SliderButtonContainerProps {
  position?: 'relative';
  maxWidth?: string;
}
interface SliderButtonProps {
  leftRight: string;
}
export const SliderButtonContainer = styled.div<SliderButtonContainerProps>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  position: ${({ position }) => (position ? position : 'initial')};
  margin: auto;
`;
export const SliderButtonRight = styled.div<SliderButtonProps>`
  position: absolute;
  right: ${({ leftRight }) => leftRight};
  top: 50%;
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  svg {
    transition: 0.2s linear;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.58);
    }
  }
`;
export const SliderButtonLeft = styled.div<SliderButtonProps>`
  position: absolute;
  left: ${({ leftRight }) => leftRight};
  top: 50%;
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  svg {
    transition: 0.2s linear;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.58);
    }
  }
`;
