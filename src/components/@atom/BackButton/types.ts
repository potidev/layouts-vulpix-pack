import { ButtonProps } from "@potidev/react-vulpix-pack";

export type BackButtonProps = Omit<ButtonProps, "children"> & {
  iconClassName?: string;
};