"use client";

import PageWrapper from "../components/PageWrapper";
import RoyaltiesBox from "./components/RoyaltiesBox";

export default function Royalties() {
  return (
    <PageWrapper>
      <div className="prose mx-auto grid h-full place-content-center px-4 py-16 text-center opacity-[.99]">
        <RoyaltiesBox />
      </div>
    </PageWrapper>
  );
}
