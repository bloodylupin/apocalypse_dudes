"use client";
import { useWeb3React } from "@web3-react/core";
import ConnectButton from "../../components/ConnectButton";
import CollectionInfo from "./CollectionInfo";
import CollectionGallery from "./CollectionGallery";

export default function CollectionBox() {
  const { isActive } = useWeb3React();

  return (
    <>
      <h1>Collection</h1>
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
