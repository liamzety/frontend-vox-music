import React from 'react';
// Icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// Cmps
import { Svg } from '../Svg/Svg';
// Styles
import {
  SliderButtonRight,
  SliderButtonLeft,
  SliderButtonContainer,
} from './sliderButton-styles';

interface SliderButtonProps {
  cbRight: () => void;
  cbLeft: () => void;
  maxWidth?: string;
  position?: 'relative';
  leftRight: string;
}
export const SliderButton: React.FC<SliderButtonProps> = ({
  cbRight,
  cbLeft,
  maxWidth,
  position,
  leftRight,
}) => {
  return (
    <>
      <SliderButtonRight leftRight={leftRight} onClick={cbRight}>
        <Svg color="slideBtnSvg" size="2.5rem">
          <AiOutlineArrowRight />
        </Svg>
      </SliderButtonRight>
      <SliderButtonLeft leftRight={leftRight} onClick={cbLeft}>
        <Svg color="slideBtnSvg" size="2.5rem">
          <AiOutlineArrowLeft />
        </Svg>
      </SliderButtonLeft>
    </>
    // <SliderButtonContainer position={position} maxWidth={maxWidth}>
    // </SliderButtonContainer>
  );
};