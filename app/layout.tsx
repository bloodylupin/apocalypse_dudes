import "./globals.css";
import { Bungee } from "next/font/google";

const b = Bungee({ weight: "400", subsets: ["latin"] });

export const CHAIN_ID = 338;

export const metadata = {
  title: "APD | Apocalypse Dudes",
  description: "AI Cronos NFT Collection by Jack Yolo",
};

import LayoutClient from "./components/LayoutClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest" className={`${b.className}`}>
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
