import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { NextProviders } from "@/components/providers/NextUIProvider";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/app/globals.css";
import Providers from "@/components/providers/session-provider";
import { Toaster } from "@/components/ui/toaster";
import NavbarComponent from "@/components/Navbar";

const noto = Noto_Sans({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SeaMarketHub | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <Providers>
        <body className={noto.className}>
          <NextProviders>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              storageKey="seamarkethub-theme"
              enableSystem={false}
            >
              <NavbarComponent />
              <main className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </main>
              <Toaster />
            </ThemeProvider>
          </NextProviders>
        </body>
      </Providers>
    </html>
  );
}
