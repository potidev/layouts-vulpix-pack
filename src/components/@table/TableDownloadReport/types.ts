import { ReactNode } from "react";

export type TableDownloadReportOption = {
  /**
   * Label to show in dropdown item
   */
  label: string;

  /**
   * Id to refer to option
   */
  id: string;

  /**
   * Type for export
   */
  type: string;

  /**
   * Icon to show in dropdown item
   */
  icon?: ReactNode;
}


export type TableDownloadReportProps = {
  /**
   * Container class name
   */
  className?: string;

  /**
   * Title of the DropdownTrigger. By default: "Exportar relatório"
   */
  title?: string;

  /**
   * If true: disable the dropdown and show loading icon
   */
  isLoading?: boolean;
  
  /**
   * Report options to show in dropdown
   */
  options: TableDownloadReportOption[];

  /**
   * Execute when download report is clicked
   * @returns 
   */
  onClickDownloadReport?: (option: TableDownloadReportOption) => void;
};