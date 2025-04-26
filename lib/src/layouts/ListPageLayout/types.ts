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

  onClickCreateButton?: () => void;
}