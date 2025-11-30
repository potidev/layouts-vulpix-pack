import React from "react";

import type { Meta, StoryObj } from '@storybook/react';

import { fn } from 'storybook/test';

import { BackButton } from './component';
import { BackButtonProps } from "./types";

const meta: Meta<BackButtonProps>  = {
  title: 'Components/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<BackButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
  },
};