"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";

import { useWeb3React } from "@web3-react/core";

import { metaMask } from "../connectors/metaMask";
import { walletConnect } from "../connectors/walletConnect";

import { CHAIN_INFO } from "../contexts/CollectionContext";

import AnswerLabel from "./AnswerLabel";

export default function ConnectButton() {
  const { isActive } = useWeb3React();

  const modalRef = useRef<HTMLDialogElement>(null);
  const answerModalRef = useRef<HTMLDialogElement>(null);
  const [answerData, setAnswerData] = useState<{
    success?: boolean;
    answer: ReactNode;
  }>();

  return (
    <>
      {isActive ? null : (
        <>
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn-primary btn-wide btn"
            onClick={() => modalRef.current && modalRef.current.showModal()}
          >
            Connect Wallet
          </button>
          <dialog
            id="walletModal"
            className="modal prose text-center"
            ref={modalRef}
          >
            <form method="dialog" className="modal-box">
              <h2>Connect your favourite wallet</h2>
              <div className="grid gap-2 md:grid-cols-2">
                <button
                  onClick={() => {
                    try {
                      metaMask.activate(CHAIN_INFO);
                    } catch (error) {
                      console.log(error);
                      if (error instanceof Error)
                        setAnswerData({
                          success: false,
                          answer: error.message,
                        });
                      answerModalRef.current?.showModal();
                    }
                  }}
                  className="btn-large btn-primary btn"
                >
                  <Image
                    className="m-0"
                    src="./icons/metamask-logo.svg"
                    alt="metamask logo"
                    width={24}
                    height={24}
                  />
                  Metamask
                </button>
                <button
                  onClick={() => {
                    try {
                      walletConnect.activate(CHAIN_INFO.chainId);
                    } catch (error) {
                      console.log(error);
                      if (error instanceof Error)
                        setAnswerData({
                          success: false,
                          answer: error.message,
                        });
                      answerModalRef.current?.showModal();
                    }
                  }}
                  className="btn-large btn-primary btn"
                >
                  <Image
                    className="m-0"
                    src="./icons/walletconnect-logo.svg"
                    alt="walletconnect logo"
                    width={24}
                    height={24}
                  />
                  Wallet Connect
                </button>
              </div>
              <h3>Chain ID: {CHAIN_INFO.chainId}</h3>
              <p className="text-gray-400">{CHAIN_INFO.chainName}</p>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
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
      )}
    </>
  );
}
