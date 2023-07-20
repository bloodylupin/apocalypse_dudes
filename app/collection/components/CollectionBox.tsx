"use client";
import { useWeb3React } from "@web3-react/core";
import ConnectButton from "../../components/ConnectButton";
import CollectionInfo from "./CollectionInfo";
import CollectionGallery from "./CollectionGallery";

export default function CollectionBox() {
  const { isActive } = useWeb3React();

  return (
    <>
      {isActive ? (
        <>
          <CollectionInfo />
          <CollectionGallery />
        </>
      ) : (
        <ConnectButton />
      )}
    </>
  );
}
