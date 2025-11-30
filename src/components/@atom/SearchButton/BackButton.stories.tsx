import React from "react";

import type { Meta, StoryObj } from '@storybook/react';

import { fn } from 'storybook/test';

import { SearchButton, SearchButtonProps } from '.';

const meta: Meta<SearchButtonProps>  = {
  title: 'Components/SearchButton',
  component: SearchButton,
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
type Story = StoryObj<SearchButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
  },
};