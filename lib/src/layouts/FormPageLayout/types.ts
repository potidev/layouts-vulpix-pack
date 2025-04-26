import { ReactNode } from "react";

export type FormPageLayoutProps = {
  className?: string;
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
}