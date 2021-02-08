import React from 'react';
// Styles
import { SelectStyle, SelectOption } from './Select.styles';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}
export const Select: React.FC<SelectProps> = ({ options, ...baseProps }) => {
  return (
    <SelectStyle {...baseProps}>
      {options.map((option: any, idx) => {
        return (
          <SelectOption value={option} key={idx}>
            {option}
          </SelectOption>
        );
      })}
    </SelectStyle>
  );
};
