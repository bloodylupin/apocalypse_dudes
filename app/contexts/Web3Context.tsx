"use client";

import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import type { WalletConnect } from "@web3-react/walletconnect";

import { hooks as metaMaskHooks, metaMask } from "../connectors/metaMask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/walletConnect";
import { ReactNode } from "react";

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
}
