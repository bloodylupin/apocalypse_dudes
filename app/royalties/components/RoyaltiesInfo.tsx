"use client";
import { useCollection } from "~/app/contexts/CollectionContext";

export default function RoyaltiesInfo() {
  const { royalties } = useCollection();
  return (
    <div className="mb-8">
      <div className="stats shadow">
        <div className="stat bg-base-300">
          <div className="stat-title">Royalties</div>
          <div className="stat-value text-secondary">{royalties} CRO</div>
          <div className="stat-desc text-info">&nbsp;</div>
        </div>
      </div>
    </div>
  );
}
