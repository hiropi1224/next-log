import type { Meta, StoryObj } from '@storybook/react';
import { ActivityDetail } from './activityDetail';

const meta: Meta<typeof ActivityDetail> = {
  title: 'Example/ActivityDetail',
  component: ActivityDetail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActivityDetail>;

export const Primary: Story = {
  args: {
    distance: '10km',
    moving_time: '1:08:53',
    average_pace: '4:38 /km',
    average_heartrate: 150,
    average_watts: 300,
    average_cadence: 180,
  },
};
