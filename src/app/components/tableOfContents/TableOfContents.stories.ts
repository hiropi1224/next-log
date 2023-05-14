import type { Meta, StoryObj } from '@storybook/react';
import { TableOfContents } from './tableOfContents';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TableOfContents> = {
  title: 'Example/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
  argTypes: {
    toc: [
      {
        text: 'text',
        id: 'aaaa',
        tag: 'h1',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    toc: [
      {
        text: 'text1',
        id: 'a1',
        tag: 'h1',
      },
      {
        text: 'text2',
        id: 'a2',
        tag: 'h2',
      },
    ],
    contentId: '',
  },
};
