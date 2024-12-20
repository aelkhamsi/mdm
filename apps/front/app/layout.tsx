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

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <JotaiContextProvider>
          <DataProvider>
            <Suspense fallback="...">
              <Header />
            </Suspense>

            <main className="flex min-h-screen w-full flex-col items-center py-20">
              {children}
            </main>

            <Footer />
            <VercelAnalytics />
          </DataProvider>
        </JotaiContextProvider>
      </body>
    </html>
  );
}
