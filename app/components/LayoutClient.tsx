"use client";

import { type ReactNode } from "react";

import Web3Provider from "../contexts/Web3Context";
import CollectionProvider from "../contexts/CollectionContext";

import Header from "./Header";
import Footer from "./Footer";
import BottomNavbar from "./BottomNavbar";

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <Web3Provider>
      <CollectionProvider>
        <body>
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
  );
}
