import "./globals.css";
import "@mdm/ui/globals.css";
import cx from "classnames";
import { geist, literata } from "../lib/fonts";
import Footer from "@/app/components/layout/footer/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Header from "@/app/components/layout/header";
import JotaiContextProvider from "./jotaiContextProvider";
import { DataProvider } from "../providers/data.provider";
import { Toaster } from "@mdm/ui";


export const metadata = {
  title: "MDM 2026",
  description: "MDM: La grande rencontre des passionnés de mathématiques",
  metadataBase: new URL("https://mdm.mathmaroc.org"),
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicons/favicon_dark.png',
        href: '/images/favicons/favicon_dark.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicons/favicon_light.png',
        href: '/images/favicons/favicon_light.png',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${literata.variable}`}>
      <body>
        <JotaiContextProvider>
          <DataProvider>
            <Suspense fallback="...">
              <Header />
            </Suspense>

            <main className="flex min-h-screen w-full flex-col items-center bg-[#F9F6EE]">
              {children}
            </main>

            <Footer />
            <Toaster />
            <VercelAnalytics />
          </DataProvider>
        </JotaiContextProvider>
      </body>
    </html>
  );
}
