import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import images from "../../assets";
import { NFTContext } from "../../context/NFTContext";
import { shortenAddress } from "../../utils/shortenAddress";

const NFTCard = ({ nft, onProfilePage }) => {
  const { nftCurrency } = useContext(NFTContext);
  return (
    <Link href={{ pathname: "/nft-details", query: nft }}>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-full minmd:min-w-256 dark:bg-nft-black-3 bg-white rounded-2xl p-4 mx-1 my-2 minlg:m-8 sm:my-2 sm:mx-auto cursor-pointer shadow-md hover:scale-105 select-none">
        <div className="relative h-52 sm:h-96 xs:h-64 minmd:h-60 minlg:h-300 w-full rounded-xl overflow-hidden">
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            alt={nft.name || `nft${nft.i}`}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins text-nft-highlight-color font-semibold text-sm minlg:text-xl">{nft.name}</p>
          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:_">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">
              {nft.price} <span className="normal">{nftCurrency}</span>
            </p>
            <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl">
              {shortenAddress(onProfilePage ? nft.owner : nft.seller)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
