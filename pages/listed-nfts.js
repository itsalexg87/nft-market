import { useState, useEffect, useContext } from "react";
import { NFTContext } from "../context/NFTContext";
import { NFTCard, Loader } from "../components";
import Link from "next/link";

const ListedNfts = () => {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchMyNFTsOrListedNFTs } = useContext(NFTContext);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => setNfts(items));
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );

  if (!isLoading && nfts.length === 0)
    return (
      <div className="flexCenter sm:p-4 p-16 min-h-screen flex-col">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold text-center">
          You have no NFT&apos;s listed for sale
        </h1>
        <p className="font-poppins dark:text-white mt-4 text-nft-black-1 font-semibold text-xl">
          Create one{" "}
          <span className="text-nft-highlight-color hover:text-nft-gray-2">
            <Link href="/create-nft">here</Link>
          </span>
        </p>
        <p className="font-poppins dark:text-white mt-4 text-nft-black-1 font-semibold text-xl">
          or list one you{" "}
          <span className="text-nft-highlight-color hover:text-nft-gray-2">
            <Link href="/my-nfts">own</Link>
          </span>
        </p>
      </div>
    );

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2 className="uppercase font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold mt-2 ml-4 sm:ml-2">
            Your NFT&apos;s <span className="text-nft-highlight-color">for sale</span>
          </h2>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {nfts.map((nft) => (
              <NFTCard key={nft.tokenId} nft={nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedNfts;
