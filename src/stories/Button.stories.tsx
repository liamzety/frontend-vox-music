import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../aux-cmps/Button/Button';
import { RootStoreProvider } from '../store/StoreContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../assets/style/theme';
import { GlobalStyles } from '../assets/style/main';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <RootStoreProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Button {...args}>Button</Button>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'r25',
};

export const Meduim = Template.bind({});
Meduim.args = {
  size: 'medium',
  label: 'r25',
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'r25',
};
