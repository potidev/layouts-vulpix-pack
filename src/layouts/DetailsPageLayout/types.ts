import { PageMaxContentProps } from "@/components";
import { ReactNode } from "react";

export type DetailsPageLayoutProps = {
  title: string;
  children: ReactNode;
  editHref?: string;
  editTitle?: string;
  deleteTitle?: string;
  onClickDelete?: () => void;
  extraButton?: ReactNode;
  withBackButton?: boolean;

  onClickBackButton?: () => void;

  description?: string;

  /**
     * Container class name
     */
  className?: string;

  /**
   * Content class name
   */
  contentClassName?: string;

  pageMaxContentProps?: Omit<PageMaxContentProps, "className" | "contentClassName">;
}
