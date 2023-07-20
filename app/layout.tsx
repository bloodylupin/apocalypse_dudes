import "./globals.css";
import { Bungee } from "next/font/google";

const b = Bungee({ weight: "400", subsets: ["latin"] });

// import { type Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Apocalypse Dudes',
//   description: 'Cronos NFT AI Collection by Jack Yolo',
// }

import Web3Provider from "./contexts/Web3Context";
import CollectionProvider from "./contexts/CollectionContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";
import PageWrapper from "./components/PageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest" className={`${b.className}`}>
      <Web3Provider>
        <CollectionProvider>
          <body className="">
            <div
              className={`grid h-full grid-rows-[auto,1fr,auto] overflow-hidden bg-neutral`}
              style={{ perspective: 1000 }}
            >
              <Header />
              <PageWrapper>{children}</PageWrapper>
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
