"use client";

import { useRef, type SetStateAction, type Dispatch } from "react";

import { useCollection } from "~/app/contexts/CollectionContext";

export default function MintInfo({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}) {
  const amountRangeRef = useRef<HTMLInputElement>(null);

  const { supply, isWl, price } = useCollection();
  return (
    <div className="mb-8 grid gap-2 md:grid-cols-3">
      <div className="stats shadow">
        <div className="stat bg-base-300">
          <div className="stat-title">Supply</div>
          <div className="stat-value text-secondary">{supply} / 137</div>
          <div className="stat-desc text-info">&nbsp;</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat bg-base-300">
          <div className="stat-title">Price</div>
          <div className="stat-value text-secondary">
            <div className="indicator">
              {parseInt(price) * amount} CRO
              {isWl ? (
                <span className="indicator-item text-xs text-warning">WL</span>
              ) : null}
            </div>
          </div>
          <div className="stat-desc text-info">
            {amount === 1 ? "nice" : ""}
            {amount === 2 ? "smart" : ""}
            {amount === 3 ? "cool" : ""}
            {amount === 4 ? "great" : ""}
            {amount === 5 ? "juicy" : ""}
          </div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat bg-base-300">
          <div className="stat-title">Amount</div>
          <div className="stat-value text-secondary">{amount}</div>
          <div className="stat-desc">
            <input
              ref={amountRangeRef}
              type="range"
              min={0}
              max="100"
              defaultValue="0"
              className="range range-info"
              step="25"
              onChange={() => {
                setAmount(parseInt(amountRangeRef.current?.value!) / 25 + 1);
              }}
            />
            <div className="flex w-full justify-between px-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
