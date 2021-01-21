import React from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
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
        <IoIosArrowDroprightCircle />
      </SlideButtonRight>
      <SlideButtonLeft leftRight={leftRight} onClick={cbLeft}>
        <IoIosArrowDropleftCircle />
      </SlideButtonLeft>
    </SlideButtonContainer>
  );
};
