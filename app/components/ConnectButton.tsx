"use client";

import { useRef } from "react";
import Image from "next/image";

import { useWeb3React } from "@web3-react/core";

import { metaMask } from "../connectors/metaMask";
import { walletConnect } from "../connectors/walletConnect";

import { CHAIN_ID } from "../layout";

export default function ConnectButton() {
  const { isActive } = useWeb3React();

  const modalRef = useRef<HTMLDialogElement>(null);

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
                  onClick={() => metaMask.activate(CHAIN_ID)}
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
                  onClick={() => walletConnect.activate(CHAIN_ID)}
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
              <h3>Chain ID: {CHAIN_ID}</h3>
              <p className="text-gray-400">Cronos Main Net</p>
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
