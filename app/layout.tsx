import "./globals.css";
import { Bungee } from "next/font/google";

const b = Bungee({ weight: "400", subsets: ["latin"] });

// import { type Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Apocalypse Dudes',
//   description: 'Cronos NFT AI Collection by Jack Yolo',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest" className={`${b.className}`}>
      {children}
    </html>
  );
}
