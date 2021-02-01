import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps } from '../aux-cmps/Text/Text';
import { RootStoreProvider } from '../store/StoreContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../assets/style/theme';
import { GlobalStyles } from '../assets/style/main';
export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => {
  return (
    <RootStoreProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Text {...args}>Text</Text>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export const h1 = Template.bind({});
h1.args = {
  type: 'h1',
};

export const h2 = Template.bind({});
h2.args = {
  type: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
  type: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
  type: 'h4',
};
export const p = Template.bind({});
p.args = {
  type: 'p',
};
export const a = Template.bind({});
a.args = {
  type: 'a',
};
