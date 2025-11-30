import React from "react";

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { PageMaxContent, PageMaxContentProps } from '.';

const meta = {
  title: 'Components/Max Content',
  component: PageMaxContent,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    disabled: {
      control: "boolean"
    }
  }
  
} satisfies Meta<PageMaxContentProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        Teste
      </div>
    )
  }
};