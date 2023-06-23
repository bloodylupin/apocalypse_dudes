"use client";

import { useWeb3React } from "@web3-react/core";

import { useCollection } from "../contexts/CollectionContext";

import { accountInterpolation } from "../utils/accountInterpolation";
import ConnectButton from "./ConnectButton";
import { WalletIcon } from "./icons/Icons";

export default function ConnectAvatar() {
  const { account, connector } = useWeb3React();

  const { balance } = useCollection();

  function disconnect() {
    if (connector.deactivate) connector.deactivate();
    else connector.resetState();
  }

  return (
    <div className="dropdown-end dropdown">
      {account ? (
        <>
          <label tabIndex={0} className="btn-primary btn-circle avatar btn">
            <WalletIcon />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 text-right shadow"
          >
            <li>{accountInterpolation(account)}</li>
            <li>{Math.floor(parseFloat(balance) * 100) / 100} CRO</li>
            <li>
              <button onClick={disconnect} className="justify-end">
                Logout
              </button>
            </li>
          </ul>
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
