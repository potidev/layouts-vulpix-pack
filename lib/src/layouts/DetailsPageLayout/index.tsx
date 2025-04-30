"use client";

import React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react';
import { Button, cn, Text } from "@potidev/react-vulpix-pack";

import { DetailsPageLayoutProps } from './types';

export const DetailsPageLayout = ({ title, children, editHref, editTitle = "Editar", onClickDelete, className, extraButton, backButton = false, deleteTitle = "Remover" }: DetailsPageLayoutProps) => {
  const router = useRouter();
  
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-row items-center justify-between gap-4 gap-y-2 w-full flex-wrap">
        <div className="flex flex-row items-center gap-2">
          {
            backButton && (
              <Button size="iconMd" variant="ghost" onClick={() => router.back()} >
              <ArrowLeft className='h-4 w-4 sm:h-5 sm:w-5' />
            </Button>
            )
          }
          <Text asChild>
            <h1 className='text-xl'>
              {title}
            </h1>
          </Text>
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
    </div>
  )
}