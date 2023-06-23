"use client";

import { useState } from "react";

import { useWeb3React } from "@web3-react/core";
import ConnectButton from "../../components/ConnectButton";
import MintInfo from "./MintInfo";
import MintButton from "./MintButton";

export default function MintBox() {
  const { isActive } = useWeb3React();

  const [amount, setAmount] = useState(1);

  return (
    <>
      <h1>Mint</h1>

      {isActive ? (
        <>
          <MintInfo amount={amount} setAmount={setAmount} />
          <MintButton amount={amount} />
        </>
      ) : (
        <ConnectButton />
      )}
    </>
  );
}
