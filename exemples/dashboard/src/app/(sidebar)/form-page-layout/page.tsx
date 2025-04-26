"use client";

import { FormPageLayout } from "@/@preview/@potidev/layouts-vulpix-pack/layouts/FormPageLayout";
import { AppConstants } from "@/constants/AppConstants";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";

export default function FormPageLayoutPage() {
  return (
    <>
      <SidebarToolbar className="z-10" breadcrumbs={[
        { label: AppConstants.SHORT_NAME, href: "/" },
        { label: "FormLayout" },
      ]} />
      <SidebarMainContainer>
        <FormPageLayout
          title="Criar Usuário"
          onClickDelete={() => {}}
        >
          <h1>Teste</h1>
        </FormPageLayout>
      </SidebarMainContainer>
    </>
  );
}
