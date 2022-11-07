import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { NFTContext } from "../context/NFTContext";
import { Button, Loader, Banner, Input } from "../components";

const ResellNFT = () => {
  const { createSale, nftCurrency, isLoadingNFT } = useContext(NFTContext);
  const router = useRouter(null);
  const { tokenId, tokenURI, buyPrice } = router.query;
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const fetchNFT = async () => {
    const { data } = await axios.get(tokenURI);
    setPrice(data.price);
    setImage(data.image);
    setIsLoading(false);
  };

  useEffect(() => {
    if (tokenURI) fetchNFT();
  }, [tokenURI]);

  const resell = async () => {
    await createSale(tokenURI, price, true, tokenId);
    router.push("/");
  };

  if (isLoadingNFT)
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-4/5 md:w-full">
        <h1 className="font-poppins uppercase dark:text-white text-nft-black font-semibold text-2xl">
          Resell <span className="text-nft-highlight-color">NFT</span>
        </h1>
        <Input inputType="number" title="Price" placeholder="NFT Price" handleClick={(e) => setPrice(e.target.value)} />
        {image && (
          <div className="flex flex-col justify-center items-center">
            <img src={image} className="mt-4 rounded-xl mx-auto" width={350} />
            <p className="font-poppins dark:text-white text-nft-black-1 text-base font-normal mt-4">
              Bought for: {buyPrice} <span className="font-semibold">{nftCurrency}</span>
            </p>
          </div>
        )}
        <div className="mt-7 w-full flex justify-end">
          <Button btnName="List NFT" classStyles="mx-2 rounded-xl nft-gradient text-white" handleClick={resell} />
        </div>
      </div>
    </div>
  );
};

export default ResellNFT;
