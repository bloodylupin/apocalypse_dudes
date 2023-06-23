"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type MeatadataType = {
  image: string;
  description: string;
  name: string;
};

export default function Nft({ data }: { data: string }) {
  const [metadata, setMetadata] = useState<MeatadataType | undefined>();
  useEffect(() => {
    (async () => {
      const singleMetadata: MeatadataType = await fetch(data)
        .then((resp) => resp.json())
        .then((resp) => resp)
        .catch((e) => console.log(e));
      setMetadata(singleMetadata);
    })();
  }, [data]);
  const modalRef = useRef<HTMLDialogElement>(null);
  return metadata ? (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button onClick={() => modalRef.current && modalRef.current.showModal()}>
        <figure>
          <Image
            src={`https://ipfs.io/ipfs/${metadata.image.split("/")[2]}/${
              metadata.image.split("/")[3]
            }`}
            alt={metadata.name}
            className="rounded shadow-lg shadow-primary"
            width={853}
            height={1280}
            // placeholder="blur"
            // blurDataURL=""
          />
          <figcaption>{metadata.name}</figcaption>
        </figure>
      </button>
      <dialog
        id="walletModal"
        className="modal prose text-center"
        ref={modalRef}
      >
        <form method="dialog" className="modal-box">
          <figure className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <Image
              src={`https://ipfs.io/ipfs/${metadata.image.split("/")[2]}/${
                metadata.image.split("/")[3]
              }`}
              alt={metadata.name}
              className="rounded shadow-lg shadow-primary"
              width={853}
              height={1280}
            />
            <figcaption className="badge badge-primary absolute -right-2 -top-2 mt-0">
              {metadata.name}
            </figcaption>
          </figure>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  ) : null;
}
