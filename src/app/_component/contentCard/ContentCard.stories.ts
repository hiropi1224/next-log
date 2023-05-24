import type { Meta, StoryObj } from '@storybook/react';
import { ContentCard } from './ContentCard';

const meta: Meta<typeof ContentCard> = {
  title: 'Example/ContentCard',
  component: ContentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

export const Primary: Story = {
  args: {
    title: 'title',
    image: undefined,
    createdAt: '2023/1/1',
  },
};
