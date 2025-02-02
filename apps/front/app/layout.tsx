import "./globals.css";
import "@mdm/ui/globals.css";
import cx from "classnames";
import { sfPro, inter } from "./lib/fonts";
import Footer from "@/app/components/layout/footer/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Header from "@/app/components/layout/header";
import JotaiContextProvider from "./jotaiContextProvider";
import { DataProvider } from "./providers/data.provider";
import { Toaster } from "@mdm/ui";
import Script from "next/script";
import { Head } from "next/document";


export const metadata = {
  title: "MDM 2025",
  description: "MDM: La grande rencontre des passionnés de mathématiques",
  metadataBase: new URL("https://mathmaroc.org"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Script id="next"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-DJES2Z0KBB`}>
        </Script>
        <Script id="next">
            {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DJES2Z0KBB');`
            }
        </Script>
      </Head>

      <body className={cx(sfPro.variable, inter.variable)}>
        <JotaiContextProvider>
          <DataProvider>
            <Suspense fallback="...">
              <Header />
            </Suspense>

            <main className="flex min-h-screen w-full flex-col items-center">
              {children}
            </main>

            <Footer />
            <Toaster />
            <VercelAnalytics />
            <GoogleAnalytics />
          </DataProvider>
        </JotaiContextProvider>
      </body>
    </html>
  );
}
