import { MySidebar } from "@/components/MySidebar";
import { SidebarInset, SidebarProvider } from "@potidev/react-vulpix-pack";

type LayoutProps = {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: LayoutProps) {
  return (
    <SidebarProvider>
      <MySidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
