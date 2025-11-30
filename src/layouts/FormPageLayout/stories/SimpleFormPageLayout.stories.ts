import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Layout from '../../../../stories/pages/form-page-layout/page';

const meta = {
  title: 'Layouts/Form Page Layout/Simple',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};