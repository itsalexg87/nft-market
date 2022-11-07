import React from "react";
import { Button } from "../components";

const Info = () => {
  return (
    <div className="flex justify-center sm:px-4 py-12 px-14 min-h-[70vh] flex-1">
      <div className="w-full minmd:w-4/5">
        {/* Overview */}
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold uppercase">
          General <span className="text-nft-highlight-color">Overview</span>
        </h1>
        <div className="mt-4 mb-6 flex flex-col justify-around gap-3 border-b dark:border-nft-black-1 border-nft-gray-1">
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">Explore NFTs.</span> NFTs on Marketplace to buy
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">Listed NFTs.</span> NFTs you created and can be
            bought
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl mb-6">
            <span className="text-nft-highlight-color font-semibold">My NFTs.</span> NFTs you bought and own
          </p>
        </div>
        {/* How it works */}
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold uppercase">
          How it <span className="text-nft-highlight-color">Works</span>
        </h1>
        <div className="mt-4 mb-6 flex flex-col justify-around gap-3 border-b dark:border-nft-black-1 border-nft-gray-1">
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">1.</span> Get Metamask{" "}
            <a href="https://metamask.io/" rel="noreferrer noopener">
              <span className="text-nft-highlight-color hover:text-nft-gray-2">here</span>
            </a>
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">2.</span> Connect your MetaMask wallet via
            &apos;Connect&apos; Button in Navbar
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">3.</span> Switch to Polygon Mumbai Network
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">4.</span> Get some MATIC from{" "}
            <a href="https://faucet.polygon.technology/" rel="noreferrer noopener">
              <span className="text-nft-highlight-color hover:text-nft-gray-2">Polygon Faucet</span>
            </a>
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">5.</span> Create your own NFTs
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">6.</span> Post your NFTs on Marketplace for sale
            (0.025 MATIC psting fee)
          </p>
          <p className="mb-6 font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">7.</span> Buy other NFTs on Marketplace
          </p>
        </div>
        {/* Bugs */}
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold uppercase">
          Potential <span className="text-nft-highlight-color">Bugs</span>
        </h1>
        <div className="mt-4 mb-6 flex flex-col justify-around gap-3">
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xl">
            <span className="text-nft-highlight-color font-semibold">MetaMask does not let you create || buy.</span>
            <br /> Click on Profile &gt; Settings &gt; Advanced &gt; Reset Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
