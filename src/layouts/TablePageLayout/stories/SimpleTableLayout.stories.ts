import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { TableLayoutSimple } from '../../../../stories/pages/table-layout-simple/page';

const meta = {
  title: 'Layouts/Table Page Layout/Simple',
  component: TableLayoutSimple,
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