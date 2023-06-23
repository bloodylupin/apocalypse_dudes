"use client";

import { useCollection } from "~/app/contexts/CollectionContext";
import Nft from "./Nft";

export default function CollectionGallery() {
  const { uri } = useCollection();
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {uri.map((t) => (
        <Nft key={t} data={t} />
      ))}
    </div>
  );
}
