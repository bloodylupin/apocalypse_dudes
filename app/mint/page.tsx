"use client";

import PageWrapper from "../components/PageWrapper";
import MintBox from "./components/MintBox";

export default function Mint() {
  return (
    <PageWrapper>
      <div className="prose mx-auto grid h-full place-content-center px-4 py-16 text-center opacity-[.99]">
        <MintBox />
      </div>
    </PageWrapper>
  );
}
