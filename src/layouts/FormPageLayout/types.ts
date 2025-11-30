import { PageMaxContentProps } from "@/components";
import { ReactNode } from "react";

export type FormPageLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
  onClickDelete?: () => void;
  deleteButtonLabel?: string;
  deleteButtonDisabled?: boolean;
  onClickBackButton?: () => void;
  extraButtons?: ReactNode;
  buttonsContainerClassName?: string;
  childrenWithoutCard?: boolean;
  withoutBackButton?: boolean;
  cardClassName?: string;

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