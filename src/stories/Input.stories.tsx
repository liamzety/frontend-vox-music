import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RootStoreProvider } from '../store/StoreContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../assets/style/theme';
import { GlobalStyles } from '../assets/style/main';
import { Input, InputProps } from '../aux-cmps/Input/Input';
export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  return (
    <RootStoreProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Input {...args} />
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export const input1 = Template.bind({});
input1.args = {
  placeholder: 'PLACEHOLDER',
};
