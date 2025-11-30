"use client";

import React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react';
import { Button, cn, Text } from "@potidev/react-vulpix-pack";

import { DetailsPageLayoutProps } from './types';
import { PageHeader, PageMaxContent } from "@/components";

export const DetailsPageLayout = ({ title, children, editHref, editTitle = "Editar", onClickDelete, className, contentClassName, pageMaxContentProps, extraButton, withBackButton = false, description, onClickBackButton, deleteTitle = "Remover" }: DetailsPageLayoutProps) => {
  const router = useRouter();
  
  return (
    <PageMaxContent className={className} contentClassName={cn("gap-6", contentClassName)}>
      <div className="flex flex-row items-center justify-between gap-4 gap-y-2 w-full flex-wrap">
        <div className="flex flex-row items-center gap-2">
          <PageHeader
            title={title}
            withBackButton={withBackButton}
            description={description}
            onClickBackButton={onClickBackButton}
          />
        </div>
        <div className="flex flex-row gap-1 md:gap-2">
          {editHref && (
            <Button variant="outline" asChild>
              <Link href={editHref}>
                <Pencil />
                <span className="hidden md:block">{editTitle}</span>
              </Link>
            </Button>
          )}
          {onClickDelete && (
            <Button variant="destructive" onClick={onClickDelete}>
              <Trash2 />
              <span className="hidden md:block">{deleteTitle}</span>
            </Button>
          )}
          {extraButton}
        </div>
      </div>
      {children}
    </PageMaxContent>
  )
}