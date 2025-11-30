import React from "react";

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { PageHeader, PageHeaderProps } from '.';

const meta: Meta<PageHeaderProps>  = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { 
    onClickBackButton: fn(),  
  },
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<PageHeaderProps>;

export const Default: Story = {
  args: {
    title: "Usuários",
    description: "Lista de usuário cadastrados",
    withBackButton: true,
  },
};


export const WithoutDescription: Story = {
  args: {
    title: "Usuários",
    withBackButton: true,
  },
};

export const WithoutBackButton: Story = {
  args: {
    title: "Usuários",
    description: "Lista de usuário cadastrados",
  },
};
