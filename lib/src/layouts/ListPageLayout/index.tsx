import React from "react";
import Link from "next/link";
import { Plus } from 'lucide-react';
import { Button, cn, Text } from "@potidev/react-vulpix-pack";

import { ListPageLayoutProps } from "./types";

export const ListPageLayout = ({ title, children, createHref, createButtonTitle = "Cadastrar", onClickCreateButton, className }: ListPageLayoutProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <Text asChild>
          <h1 className="text-xl">
            {title}
          </h1>
        </Text>
        {
          createHref || onClickCreateButton && (
            <Button size="sm" style={{ width: "fit-content" }} asChild={!!createHref} onClick={onClickCreateButton}>
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
          )
        }
      </div>
      {children}
    </div>
  )
}