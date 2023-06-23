"use client";

import HomeBox from "./components/HomeBox";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="prose mx-auto grid h-full max-w-md place-content-center px-4 py-16 text-center">
        <HomeBox />
      </div>
    </PageWrapper>
  );
}
