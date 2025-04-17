import type { Metadata } from "next";
import "../styles/css/global.css";

import { ThemeProvider } from "@/contexts/ThemeProvider";
import { LoaderOverlayProvider } from "@potidev/react-vulpix-pack";

export const metadata: Metadata = {
  title: "Layouts Vulpix Pack"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme={"light"}
          enableSystem
          disableTransitionOnChange
        >
          <LoaderOverlayProvider>
            {children}
          </LoaderOverlayProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}