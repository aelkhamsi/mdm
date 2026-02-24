import localFont from "next/font/local";
import { Literata } from "next/font/google";

export const geist = localFont({
  src: './Geist-VariableFont_wght.ttf',
  variable: "--font-geist",
});

export const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});
