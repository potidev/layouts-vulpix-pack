"use client";

import React from "react";
import { Button, Card, cn, Paragraph, Text } from '@potidev/react-vulpix-pack';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useRouter } from "next/navigation";

import { FormPageLayoutProps } from "./types";

export const FormPageLayout = ({ 
  children, 
  title, 
  description, 
  onClickDelete, 
  extraButtons, 
  onClickBackButton, 
  childrenWithoutCard = false, 
  withoutBackButton = false, 
  cardClassName, 
  deleteButtonLabel = "Remover", 
  deleteButtonDisabled,
  buttonsContainerClassName,
}: FormPageLayoutProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <div className={cn("flex flex-row gap-2", !description ? "items-center" : undefined)}>
          {
            withoutBackButton === false && (
              <Button size="iconMd" variant="ghost" onClick={() => onClickBackButton ? onClickBackButton() : router.back()}>
                <ArrowLeft className='h-4 w-4 sm:h-5 sm:w-5' />
              </Button>
            )
          }
          <section className="flex flex-col gap-1">
            <Text asChild>
              <h1 className='text-xl'>
                {title}
              </h1>
            </Text>
            {description ? <Paragraph className="text-sm">{description}</Paragraph> : null}
          </section>
        </div>
        <div className={cn("flex flex-row gap-2", buttonsContainerClassName)}>
          {onClickDelete ? (
            <Button variant="destructive" onClick={onClickDelete} disabled={deleteButtonDisabled}>
              <Trash2 />
              <p className="hidden md:block">{deleteButtonLabel}</p>
            </Button>
          ) : null}
          {extraButtons}
        </div>
      </div>
      {
        childrenWithoutCard ? children : (
          <Card className={cardClassName}>
            {children}
          </Card>
        )
      }
    </div>
  )
}