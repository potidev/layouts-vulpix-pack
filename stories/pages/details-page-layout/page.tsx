"use client";

import React from "react";
import { DetailsPageLayout, FormPageLayout } from "../../../src";
import { SidebarContainer } from "../../components/SidebarContainer";
import { AppConstants } from "../../constants/AppConstants";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";

export default function FormPageLayoutPage() {
  return (
    <SidebarContainer>
      <SidebarToolbar className="z-10" breadcrumbs={[
        { label: AppConstants.SHORT_NAME, href: "/" },
        { label: "FormLayout" },
      ]} />
      <DetailsPageLayout
        title="Criar Usuário"
        description="Criar novo usuário no seu sistema"
        onClickDelete={() => {}}
      >
        Detailes do usuário
      </DetailsPageLayout>
    </SidebarContainer>
  );
}
