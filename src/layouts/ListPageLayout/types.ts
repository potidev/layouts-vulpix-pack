import { PageMaxContentProps } from "@/components";
import { ReactNode } from "react";

export type ListPageLayoutProps = {
  /**
   * Page title
   */
  title: string;

  /**
   * Page content
   */
  children: ReactNode;

  /**
   * Show a create button with <a> tag and his href
   */
  createHref?: string;

  /**
   * Setup the create button title. By default is "Cadastrar"
   */
  createButtonTitle?: string;

  /**
   * Container class name
   */
  className?: string;

  /**
   * Content class name
   */
  contentClassName?: string;

  pageMaxContentProps?: Omit<PageMaxContentProps, "className" | "contentClassName">;

  onClickCreateButton?: () => void;

  withBackButton?: boolean;

  onClickBackButton?: () => void;

  description?: string;

  extraButtons?: ReactNode;

  buttonsContainerClassName?: string;
}