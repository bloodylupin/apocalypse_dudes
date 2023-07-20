"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Home() {
  const location = usePathname();
  return (
    <>
      <h2>Cronos NFT Collection</h2>
      <p className="mx-auto max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro
        possimus at fugit accusantium voluptatem ad neque culpa?
      </p>
      <Link href="/mint" className="btn-primary btn-wide btn mx-auto">
        Mint
      </Link>
    </>
  );
}
