"use client";

import Link from "next/link";

export default function HomeBox() {
  return (
    <>
      <h1>Apocalypse Dudes</h1>
      <h2>Cronos NFT Collection</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro
        possimus at fugit accusantium voluptatem ad neque culpa?
      </p>
      <Link href="/mint" className="btn-primary btn-wide btn mx-auto">
        Mint
      </Link>
    </>
  );
}
