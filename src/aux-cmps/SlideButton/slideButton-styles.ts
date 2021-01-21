import  styled  from "styled-components";

interface SlideButtonContainerProps {
  position?: 'relative';
  maxWidth?: string;
}
interface SlideButtonProps {
  leftRight:string;
}
export const SlideButtonContainer = styled.div<SlideButtonContainerProps>`
max-width: ${({maxWidth}) => maxWidth ? maxWidth : '100%'};
position: ${({position}) => position ? position: 'initial'};
margin: auto;
`;
export const SlideButtonRight = styled.div<SlideButtonProps>`
  position: absolute;
  right: ${({leftRight}) => leftRight};
  svg {
    cursor:pointer;
    opacity:0.5;
    &:hover {
      opacity:0.8;
    }
    &:active {
      transform: scale(0.58);
    }
  }
`;
export const SlideButtonLeft = styled.div<SlideButtonProps>`
  position: absolute;
  left: ${({leftRight}) => leftRight};
  svg {
    cursor:pointer;
    opacity:0.5;
    &:hover {
      opacity:0.8;
    }
    &:active {
      transform: scale(0.58);
    }
  }
`;