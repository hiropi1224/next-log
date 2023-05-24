import type { Meta, StoryObj } from '@storybook/react';
import { FixedFooter } from './fixedFooter';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FixedFooter> = {
  title: 'Example/FixedFooter',
  component: FixedFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FixedFooter>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
