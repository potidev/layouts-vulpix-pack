"use client";

import React from "react";

import { cn, Paragraph, Text } from "@potidev/react-vulpix-pack";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/@atom";

type PageHeaderProps = {
  className?: string;
  withBackButton?: boolean;
  description?: string;
  title: string;
  onClickBackButton?: () => void;
};

export const PageHeader = ({ className, withBackButton = false, title, description, onClickBackButton }: PageHeaderProps) => {
  const router = useRouter();
  return (
    <div className={cn("flex flex-row gap-2", !description ? "items-center" : undefined, className)}>
      {withBackButton === true ? (
        <BackButton onClick={() => onClickBackButton ? onClickBackButton() : router.back()} />
      ) : null}
      <section className="flex flex-col gap-1">
        <Text asChild>
          <h1 className='text-xl'>
            {title}
          </h1>
        </Text>
        {description ? <Paragraph className="text-sm">{description}</Paragraph> : null}
      </section>
    </div>
  );
};