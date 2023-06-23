"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";

import { useWeb3React } from "@web3-react/core";
import { BigNumberish, Contract, ContractRunner, ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/solidityData";

type CollectionContextType = {
  balance: string;
  contract: ethers.Contract | undefined;
  supply: string;
  isWl?: boolean;
  price: string;
  royalties: string;
  uri: string[];
  setMinted: Dispatch<SetStateAction<number>> | undefined;
  setClaimed: Dispatch<SetStateAction<number>> | undefined;
};

const CollectionContext = createContext<CollectionContextType>({
  balance: "0",
  contract: undefined,
  supply: "0",
  isWl: undefined,
  price: "0",
  royalties: "0",
  uri: [],
  setMinted: undefined,
  setClaimed: undefined,
});
export function useCollection() {
  return useContext(CollectionContext);
}

export default function CollectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { account, provider } = useWeb3React();

  const [minted, setMinted] = useState(0);
  const [claimed, setClaimed] = useState(0);

  const [balance, setBalance] = useState("0");
  useEffect(() => {
    if (!account || !provider) return;
    (async () => {
      setBalance(
        ethers.formatEther((await provider?.getBalance(account)).toBigInt())
      );
    })();
  }, [account, provider, minted, claimed]);

  const [contract, setContract] = useState<ethers.Contract | undefined>();
  useEffect(() => {
    if (!provider) return;
    const signer = provider.getSigner();
    setContract(
      new Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer as unknown as ContractRunner
      )
    );
  }, [provider]);

  const [supply, setSupply] = useState("0");
  useEffect(() => {
    if (!contract) return;
    (async () => {
      setSupply((await contract.totalSupply()).toString());
    })();
  }, [contract, minted]);

  const [isWl, setIsWl] = useState();
  const [price, setPrice] = useState("0");
  useEffect(() => {
    if (!contract || !account) return;
    (async () => {
      const wl = await contract.isWhitelisted(account);
      setIsWl(wl);
      setPrice(
        ethers.formatEther(
          wl
            ? await contract.WHITELIST_MINT_PRICE()
            : await contract.MINT_PRICE()
        )
      );
    })();
  }, [contract, account]);

  const [royalties, setRoyalties] = useState("0");
  useEffect(() => {
    if (!contract) return;
    (async () => {
      setRoyalties(
        (
          Math.floor(
            parseFloat(ethers.formatEther(await contract.getRoyalties())) * 100
          ) / 100
        ).toString()
      );
    })();
  }, [contract, minted, claimed]);

  const [uri, setUri] = useState<string[]>([]);
  useEffect(() => {
    if (!contract || !account) return;
    (async () => {
      const idArray: string[] = (await contract.tokensOfWallet(account)).map(
        (id: BigNumberish) => id.toString()
      );
      if (!idArray.length) return;
      const tempUri = await contract.tokenURI(idArray![0]);
      const uriArray = idArray.map(
        (id: string) => `https://ipfs.io/ipfs/${tempUri.split("/")[2]}/${id}`
      );

      setUri(uriArray.reverse());
    })();
  }, [contract, account, minted]);

  return (
    <CollectionContext.Provider
      value={{
        balance,
        contract,
        supply,
        isWl,
        price,
        royalties,
        uri,
        setMinted,
        setClaimed,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
