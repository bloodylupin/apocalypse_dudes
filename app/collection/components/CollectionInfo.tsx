"use client";

import { useCollection } from "~/app/contexts/CollectionContext";
import { useWeb3React } from "@web3-react/core";
import { accountInterpolation } from "~/app/utils/accountInterpolation";

export default function CollectionInfo() {
  const { uri } = useCollection();
  const { account } = useWeb3React();
  return (
    <div>
      <h2>You own {uri.length} NFTS</h2>
      {account ? <h3>{accountInterpolation(account)}</h3> : null}
    </div>
  );
}
