import { ReactNode } from "react";

export type DetailsPageLayoutProps = {
  title: string;
  children: ReactNode;
  editHref?: string;
  editTitle?: string;
  deleteTitle?: string;
  onClickDelete?: () => void;
  className?: string;
  extraButton?: ReactNode;
  backButton?: boolean;
}
