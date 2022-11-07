import Image from "next/image";
import { shortenAddress } from "../../utils/shortenAddress";

const PaymentBodyCmp = ({ nft, nftCurrency }) => {
  return (
    <div className="flex flex-col">
      {/* TOP */}
      <div className="flexBetween border-b dark:border-nft-black-1 border-nft-gray-1 py-1">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Item</p>
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Subtotal</p>
      </div>
      {/* Image & Details */}
      <div className="flexBetweenStart my-5">
        <div className="flex-1 flexStart">
          <div className="relative w-28 h-28">
            <Image src={nft.image} layout="fill" objectFit="cover" className="rounded-xl" />
          </div>
          <div className="flexCenterStart flex-col ml-5">
            <p className="font-poppins text-nft-highlight-color font-semibold text-sm minlg:text-xl">{nft.name}</p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
              {shortenAddress(nft.seller)}
            </p>
          </div>
        </div>
        <div className="">
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl">
            {nft.price}&nbsp;
            <span className="font-semibold">{nftCurrency}</span>
          </p>
        </div>
      </div>
      {/* TOTAL */}
      <div className="flexBetween mt-10 border-t dark:border-nft-black-1 border-nft-gray-1 py-1">
        <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-base minlg:text-xl">Total</p>
        <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl">
          {nft.price}&nbsp;
          <span className="font-semibold">{nftCurrency}</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentBodyCmp;
