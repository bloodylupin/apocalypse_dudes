"use client";

import CollectionBox from "./components/CollectionBox";

import PageWrapper from "../components/PageWrapper";

export default function Collection() {
  return (
    <PageWrapper>
      <div className="prose mx-auto grid h-full place-content-center px-4 py-16 text-center">
        <CollectionBox />
      </div>
    </PageWrapper>
  );
}
