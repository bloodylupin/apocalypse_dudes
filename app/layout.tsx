"use client";

import "./globals.css";
import { Bungee } from "next/font/google";

const b = Bungee({ weight: "400", subsets: ["latin"] });

import Web3Provider from "./contexts/Web3Context";
import CollectionProvider from "./contexts/CollectionContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";

export const CHAIN_ID = 338;

export const metadata = {
  title: "APD | Apocalypse Dudes",
  description: "AI Cronos NFT Collection by Jack Yolo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <Web3Provider>
        <CollectionProvider>
          <body className={`${b.className}`}>
            <div className={`grid h-full grid-rows-[auto,1fr,auto]`}>
              <Header />
              {children}
              <Footer />
            </div>
            <div className="h-16"></div>
            <BottomNavbar />
          </body>
        </CollectionProvider>
      </Web3Provider>
    </html>
  );
}
