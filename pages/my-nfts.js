import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { NFTContext } from "../context/NFTContext";
import { NFTCard, Loader, Banner, Searchbar } from "../components";
import { shortenAddress } from "../utils/shortenAddress";
import images from "../assets";

const MyNFTS = () => {
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSelect, setActiveSelect] = useState("Recently added");
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTContext);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs().then((items) => {
      setNfts(items);
      setNftsCopy(items);
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const sortedNfts = [...nfts];

    switch (activeSelect) {
      case "Price (low to high)":
        setNfts(sortedNfts.sort((a, b) => a.price - b.price));
        break;
      case "Price (high to low)":
        setNfts(sortedNfts.sort((a, b) => b.price - a.price));
        break;
      case "Recently added":
        setNfts(sortedNfts.sort((a, b) => b.tokenId - a.tokenId));
        break;
      default:
        setNfts(nfts);
        break;
    }
    // console.log(activeSelect);
  }, [activeSelect]);

  if (isLoading)
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );

  const onHandleSearch = (value) => {
    const filteredNfts = nfts.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));

    if (filteredNfts.length) {
      setNfts(filteredNfts);
    } else {
      setNfts(nftsCopy);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner text="Your NFTs" childStyles="text-center mb-4 uppercase" parentStyles="h-80 justify-center" />
        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter w-40 h-40 sm:w-36 sm:h-36 p-1 dark:bg-nft-black-4 bg-white rounded-full">
            <Image src={images.creator1} className="rounded-full object-cover" objectFit="cover" />
          </div>
          <p className="font-poppins dark:text-white mt-4 text-nft-black-1 font-semibold text-2xl">
            {shortenAddress(currentAccount)}
          </p>
        </div>
      </div>
      {!isLoading && !nfts.length && !nftsCopy.length ? (
        <div className="flexCenter sm:p-4 p-16 flex-col">
          <h1 className="font-poppins dark:text-white text-nft-black-1 font-bold text-3xl">No NFTs owned</h1>
          <p className="font-poppins dark:text-white mt-4 text-nft-black-1 font-semibold text-xl">
            Buy one{" "}
            <span className="text-nft-highlight-color hover:text-nft-gray-2">
              <Link href="/">here</Link>
            </span>
          </p>
        </div>
      ) : (
        <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
          <div className="flex-1 w-full flex flex-row sm:flex-col px-4 xs:px-0 minlg:px-8">
            <Searchbar
              activeSelect={activeSelect}
              setActiveSelect={setActiveSelect}
              handleSearch={onHandleSearch}
              clearSearch={onClearSearch}
            />
          </div>
          <div className="mt-3 w-full flex flex-wrap">
            {nfts.map((nft) => (
              <NFTCard key={nft.tokenId} nft={nft} onProfilePage />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyNFTS;
