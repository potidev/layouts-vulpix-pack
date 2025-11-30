"use client";

import React from "react";
import { Button, Card, cn, Paragraph, Text } from '@potidev/react-vulpix-pack';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useRouter } from "next/navigation";

import { FormPageLayoutProps } from "./types";
import { BackButton, PageHeader } from "@/components";

export const FormPageLayout = ({ 
  className,
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
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <PageHeader
          title={title}
          withBackButton={!withoutBackButton}
          description={description}
          onClickBackButton={onClickBackButton}
        />
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