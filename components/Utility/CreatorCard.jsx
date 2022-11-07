import { useContext } from "react";
import { NFTContext } from "../../context/NFTContext";
import Image from "next/image";
import images from "../../assets";

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
  const { nftCurrency } = useContext(NFTContext);
  return (
    <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4 hover:scale-105">
      <div className="w-8 h-8 minlg:w-10 minlg:h-10 bg-nft-highlight-color flexCenter rounded-full">
        <p className="font-poppins text-white font-semibold text-bold minlg:text-lg">{rank}</p>
      </div>
      {/* Images */}
      <div className="my-2 flex justify-center">
        <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
          <Image src={creatorImage} alt="creator" layout="fill" objectFit="cover" className="rounded-full" />
          {/* <div className="absolute w-4 h-4 minlg:w-7 minlg:h-7 bottom-2 -right-0">
            <Image src={images.tick} layout="fill" objectFit="contain" alt="tick" />
          </div> */}
        </div>
      </div>
      {/* Information */}
      <div className="mt-3 minlg:mt-7 text-center flexCenter flex-col">
        <p className="font-poppins text-nft-highlight-color font-semibold text-base">{creatorName}</p>
        <p className="font-poppins mt-1 dark:text-white text-nft-black-1 font-semibold text-base">
          {creatorEths.toFixed(2)} <span className="font-normal">{nftCurrency}</span>
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
