import React from "react";
import Link from "next/link";
import { Plus } from 'lucide-react';
import { Button, cn } from "@potidev/react-vulpix-pack";

import { ListPageLayoutProps } from "./types";
import { PageHeader } from "@/components";

export const ListPageLayout = ({ title, children, createHref, createButtonTitle = "Cadastrar", onClickCreateButton, className, onClickBackButton, withBackButton, description, extraButtons, buttonsContainerClassName }: ListPageLayoutProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <PageHeader
          title={title}
          withBackButton={withBackButton}
          description={description}
          onClickBackButton={onClickBackButton}
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
      {children}
    </div>
  )
}