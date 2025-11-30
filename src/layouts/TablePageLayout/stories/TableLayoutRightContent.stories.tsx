import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TableLayoutPage from '../../../../stories/pages/table-layout-right-content/page';

const meta = {
  title: 'Layouts/Table Page Layout/Right Content',
  component: TableLayoutPage,
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