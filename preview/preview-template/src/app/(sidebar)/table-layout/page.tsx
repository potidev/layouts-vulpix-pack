import { AppConstants } from "@/constants/AppConstants";
import { Layouts } from "@potidev/layouts-vulpix-pack";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";

export default function Home() {
  return (
    <>
      <SidebarToolbar className="z-10" breadcrumbs={[
        { label: AppConstants.SHORT_NAME, href: "/" },
        { label: "TableLayout" },
      ]} />
      <SidebarMainContainer>
        <Layouts />
      </SidebarMainContainer>
    </>
  );
}
