import { ReactNode } from "react";

export type FormPageLayoutProps = {
  title: string;
  children: ReactNode;
  onClickDelete?: () => void;
  deleteButtonLabel?: string;
  extraButtons?: ReactNode;
}