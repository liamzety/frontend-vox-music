import React from 'react';
// Icons
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
// Cmps
import { Svg } from '../Svg/Svg';
// Styles
import {
  SlideButtonRight,
  SlideButtonLeft,
  SlideButtonContainer,
} from './slideButton-styles';

interface SlideButtonProps {
  cbRight: () => void;
  cbLeft: () => void;
  maxWidth?: string;
  position?: 'relative';
  leftRight: string;
}
export const SlideButton: React.FC<SlideButtonProps> = ({
  cbRight,
  cbLeft,
  maxWidth,
  position,
  leftRight,
}) => {
  return (
    <SlideButtonContainer position={position} maxWidth={maxWidth}>
      <SlideButtonRight leftRight={leftRight} onClick={cbRight}>
        <Svg color="slideBtnSvg" size="2.5rem">
          <IoIosArrowDroprightCircle />
        </Svg>
      </SlideButtonRight>
      <SlideButtonLeft leftRight={leftRight} onClick={cbLeft}>
        <Svg color="slideBtnSvg" size="2.5rem">
          <IoIosArrowDropleftCircle />
        </Svg>
      </SlideButtonLeft>
    </SlideButtonContainer>
  );
};
