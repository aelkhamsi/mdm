import "./globals.css";
import "@mdm/ui/globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/app/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Navbar from "@/app/components/layout/navbar";

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
        <Suspense fallback="...">
          <Navbar />
        </Suspense>

        <main className="flex min-h-screen w-full flex-col items-center justify-center py-16">
          {children}
        </main>

        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
