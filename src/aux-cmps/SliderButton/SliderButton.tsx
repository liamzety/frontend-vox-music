import React from 'react';
// Icons
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
// Cmps
import { Svg } from '../Svg/Svg';
// Styles
import { SliderButtonRight, SliderButtonLeft } from './SliderButton.styles';

interface SliderButtonProps {
  cbRight: () => void;
  cbLeft: () => void;
  color?: string;
  leftRight: string;
}
export const SliderButton: React.FC<SliderButtonProps> = ({
  cbRight,
  cbLeft,
  color = 'slideBtnSvg',
  leftRight,
}) => {
  return (
    <>
      <SliderButtonRight leftRight={leftRight} onClick={cbRight}>
        <Svg color={color} size="2.5rem">
          <RiArrowRightSLine />
        </Svg>
      </SliderButtonRight>
      <SliderButtonLeft leftRight={leftRight} onClick={cbLeft}>
        <Svg color={color} size="2.5rem">
          <RiArrowLeftSLine />
        </Svg>
      </SliderButtonLeft>
    </>
  );
};
