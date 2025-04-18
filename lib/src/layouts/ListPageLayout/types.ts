import { ReactNode } from "react";

export type ListPageLayoutProps = {
  title: string;
  children: ReactNode;
  createHref?: string;
  createButtonTitle?: string;
  className?: string;
}