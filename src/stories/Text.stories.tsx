import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps } from './Text';

export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const h1 = Template.bind({});
h1.args = {
  type: 'h1',
  content: 'H1 HERE',
};

export const h2 = Template.bind({});
h2.args = {
  type: 'h2',
  content: 'H2 HERE',
};

export const h3 = Template.bind({});
h3.args = {
  type: 'h3',
  content: 'H3 HERE',
};

export const h4 = Template.bind({});
h4.args = {
  type: 'h4',
  content: 'H4 HERE',
};
export const p = Template.bind({});
p.args = {
  type: 'p',
  content: 'P HERE',
};
