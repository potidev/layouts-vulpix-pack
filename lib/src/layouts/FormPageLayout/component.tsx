"use client";

import React from "react";
import { Button, Card, Text } from '@potidev/react-vulpix-pack';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useRouter } from "next/navigation";

import { FormPageLayoutProps } from "./types";

export const FormPageLayout = ({ children, title, onClickDelete, extraButtons, deleteButtonLabel = "Remover" }: FormPageLayoutProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <div className="flex flex-row items-center gap-2">
          <Button size="iconMd" variant="ghost" onClick={() => router.back()} >
            <ArrowLeft className='h-4 w-4 sm:h-5 sm:w-5' />
          </Button>
          <Text asChild>
            <h1 className='text-xl'>
              {title}
            </h1>
          </Text>
        </div>
        <div className="flex flex-row gap-2">
          {
            onClickDelete && (
              <Button variant="destructive" onClick={onClickDelete}>
                <Trash2 />
                <p className="hidden md:block">{deleteButtonLabel}</p>
              </Button>
            )
          }
          {extraButtons}
        </div>
      </div>
      <Card>
        {children}
      </Card>
    </div>
  )
}