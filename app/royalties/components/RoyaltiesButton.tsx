"use client";

import { useCollection } from "~/app/contexts/CollectionContext";
import { useWeb3React } from "@web3-react/core";

import AnswerLabel from "~/app/components/AnswerLabel";

import { useState, useRef } from "react";

export default function RoyaltiesButton() {
  const { contract, setClaimed } = useCollection();
  const { provider } = useWeb3React();
  const [answerData, setAnswerData] = useState<{
    success?: boolean;
    answer: string;
  }>();
  const [loading, setLoading] = useState(false);
  const answerModalRef = useRef<HTMLDialogElement>(null);
  async function claim() {
    setLoading(true);
    try {
      if (!contract || !provider) return;

      const data = contract.interface.encodeFunctionData(
        "claimAllRoyalties",
        []
      );
      const signer = provider.getSigner();
      const address = contract.getAddress();
      const tx = await signer.sendTransaction({
        to: address,
        data,
      });
      await tx.wait();

      setClaimed!((prevClaimed) => prevClaimed + 1);
      setAnswerData({ success: true, answer: "Royalties claimed!" });

      console.log("claimed");
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        setAnswerData({
          success: false,
          answer: err.message.includes("user rejected transaction")
            ? "User rejected transaction!"
            : "Please refresh the page or clear the cache!",
        });
      }
    }
    setLoading(false);
    answerModalRef.current?.showModal();
  }
  return (
    <>
      {loading ? (
        <button className="disabled btn-primary btn-wide btn mx-auto">
          <span className="loading loading-infinity loading-lg"></span>
        </button>
      ) : (
        <button className="btn-primary btn-wide btn mx-auto" onClick={claim}>
          Claim
        </button>
      )}
      <dialog id="answerModalRef" ref={answerModalRef} className="modal">
        <form method="dialog" className="modal-box">
          <AnswerLabel
            success={answerData?.success}
            answer={answerData?.answer}
          />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
