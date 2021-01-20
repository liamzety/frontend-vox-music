import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'black',
  bgColor: 'yellow',
  content: 'Button',
  label: 'r25',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'white',
  bgColor: 'red',
  content: 'Button',
  label: 'r25',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  content: 'Button',
  label: 'r25',
};

export const Meduim = Template.bind({});
Meduim.args = {
  size: 'medium',
  content: 'Button',
  label: 'r25',
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  content: 'Button',
  label: 'r25',
};
