import React from "react";
import { NFTCard, Searchbar } from "../";
import { makeId } from "../../utils/makeId";

const BestNFTs = ({ nfts, nftsCopy, activeSelect, setActiveSelect, handleSearch, clearSearch }) => {
  return (
    <>
      <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
        <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4 uppercase">
          Best <span className="text-nft-highlight-color">NFTs</span>
        </h1>
        <div className="flex flex-2 sm:w-full flex-row sm:flex-col">
          <Searchbar
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
            handleSearch={handleSearch}
            clearSearch={clearSearch}
          />
        </div>
      </div>
      <div className="flex mt-3 w-full justify-center flex-wrap">
        {nfts.map((nft) => (
          <NFTCard key={nft.tokenId} nft={nft} />
        ))}
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <NFTCard
            key={`nft-${i}`}
            nft={{
              i,
              name: `Nifty NFT ${i}`,
              price: (10 - i * 0.534).toFixed(2),
              seller: `0x${makeId(3)}...${makeId(4)}`,
              owner: `0x${makeId(3)}...${makeId(4)}`,
              description: "Cool NFT on Sale",
            }}
          />
        ))} */}
      </div>
    </>
  );
};

export default BestNFTs;
