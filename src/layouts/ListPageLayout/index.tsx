import React from "react";
import Link from "next/link";
import { Plus } from 'lucide-react';
import { Button, cn } from "@potidev/react-vulpix-pack";

import { ListPageLayoutProps } from "./types";
import { PageHeader, PageMaxContent } from "@/components";

export const ListPageLayout = ({ 
  title, 
  children, 
  createHref, 
  createButtonTitle = "Cadastrar", 
  pageMaxContentProps, 
  onClickCreateButton, 
  className,
  contentClassName, 
  onClickBackButton, 
  withBackButton, 
  description, 
  extraButtons, 
  buttonsContainerClassName,
  extraContent,
  extraContentClassName
}: ListPageLayoutProps) => {
  return (
    <PageMaxContent className={cn(className)} contentClassName={cn("gap-6", contentClassName)} {...pageMaxContentProps}>
      <header className="flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-row items-center gap-3 w-full flex-1">
          <PageHeader
            title={title}
            withBackButton={withBackButton}
            description={description}
            onClickBackButton={onClickBackButton}
            className="flex-1"
          />
          {createHref || onClickCreateButton || extraButtons ? (
            <div className={cn("flex flex-row gap-2", buttonsContainerClassName)}>
              {createHref || onClickCreateButton ? (
                <Button size="iconOnMobile" style={{ width: "fit-content" }} asChild={!!createHref} onClick={onClickCreateButton}>
                  {createHref ? (
                    <Link href={createHref}>
                      <Plus />
                      <span className="hidden sm:block">{createButtonTitle}</span>
                    </Link>
                  ) : (
                    <>
                      <Plus />
                      <span className="hidden sm:block">{createButtonTitle}</span>
                    </>
                  )}
                </Button>
              ) : null}
              {extraButtons}
            </div>
          ) : null}
        </div>
        {extraContent ? (
          <div className={cn("flex flex-col md:flex-row gap-2 w-full md:w-fit", extraContentClassName)}>
            {extraContent}
          </div>
        ) : null}
      </header>
      {children}
    </PageMaxContent>
  )
}