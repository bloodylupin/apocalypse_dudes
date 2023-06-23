"use client";

import { type ReactNode, useRef, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import { useCollection } from "~/app/contexts/CollectionContext";

import AnswerLabel from "~/app/components/AnswerLabel";
import Link from "next/link";

export default function MintButton({ amount }: { amount: number }) {
  const { contract, price, balance, setMinted } = useCollection();

  const { provider } = useWeb3React();

  const [answerData, setAnswerData] = useState<{
    success?: boolean;
    answer: ReactNode;
  }>();
  const [loading, setLoading] = useState(false);
  const answerModalRef = useRef<HTMLDialogElement>(null);

  const mint = async (amount: number) => {
    setLoading(true);
    try {
      const totalPrice = ethers.parseEther(
        (parseInt(price) * amount).toString()
      );

      // const gasLimit = await contract!.estimateGas.mint(amount, {
      //   value: totalPrice,
      // });

      // const increasedGasLimit = gasLimit.div(100).mul(110);

      //console.log("normal gas: ", gasLimit.toString());
      //console.log("increased gas: ", increasedGasLimit.toString());

      // const mint = await contract!.mint(amount, {
      //   value: totalPrice,
      // gasLimit: increasedGasLimit,
      // });

      if (!contract || !provider) return;

      const data = contract.interface.encodeFunctionData("mint", [amount]);
      const signer = provider.getSigner();
      const address = contract.getAddress();
      const tx = await signer.sendTransaction({
        to: address,
        data,
        value: totalPrice,
      });
      await tx.wait();

      // await mint.wait();
      console.log("minted");

      setAnswerData({
        success: true,
        answer: (
          <div className="flex items-center justify-between">
            {`You minted ${amount} NFT${amount > 1 ? "s" : ""}!`}
            <Link className="btn-primary btn-outline btn" href="/collection">
              Collection
            </Link>
          </div>
        ),
      });

      setMinted!((prevCount) => prevCount + 1);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        setAnswerData({
          success: false,
          answer: err.message.includes("insufficient")
            ? `Insufficient balance for mint: Price ${price} CRO`
            : err.message.includes("user rejected transaction")
            ? "User rejected the transaction"
            : "Please refresh the page or clear the cache!",
        });
      }
      if (parseFloat(balance) < parseFloat(price) * amount)
        setAnswerData({
          success: false,
          answer: `Insufficient balance for mint: Price ${price} CRO`,
        });
    }
    setLoading(false);
    answerModalRef.current?.showModal();
  };

  return (
    <>
      {loading ? (
        <button className="disabled btn-primary btn-wide btn mx-auto">
          <span className="loading loading-infinity loading-lg"></span>
        </button>
      ) : (
        <button
          className="btn-primary btn-wide btn mx-auto"
          onClick={() => mint(amount)}
        >
          Mint
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
