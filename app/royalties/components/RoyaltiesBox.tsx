"use client";
import { useWeb3React } from "@web3-react/core";
import ConnectButton from "../../components/ConnectButton";
import RoyaltiesInfo from "./RoyaltiesInfo";
import RoyaltiesButton from "./RoyaltiesButton";

export default function RoyaltiesBox() {
  const { isActive } = useWeb3React();
  return (
    <>
      <h1>Royalties</h1>

      {isActive ? (
        <>
          <RoyaltiesInfo />
          <RoyaltiesButton />
        </>
      ) : (
        <ConnectButton />
      )}
    </>
  );
}
