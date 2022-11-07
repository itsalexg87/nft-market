import { useState, useEffect, useRef, useContext } from "react";
import { useTheme } from "next-themes";
import { Banner, BestCreators, BestNFTs, Loader } from "../components";
import { NFTContext } from "../context/NFTContext";
import { getCreators, getAllCreators } from "../utils/getTopCreators";
import Link from "next/link";

const Home = () => {
  const { fetchNFTS } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [activeSelect, setActiveSelect] = useState("Recently added");

  const topCreators = getCreators(nftsCopy);

  useEffect(() => {
    fetchNFTS().then((items) => {
      setNfts(items);
      setNftsCopy(items);
      setIsLoading(false);
    });
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
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          text={
            <>
              Create, sell and buy
              <br /> amazing NFTs
            </>
          }
        />
        {!isLoading && !nfts.length ? (
          <div className="h-96 md:h-72 sm:h-54 xs:h-32">
            <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold text-center mt-10">
              No NFT&apos;s for sale
            </h1>
            <p className="font-poppins dark:text-white mt-4 text-nft-black-1 font-semibold text-xl text-center">
              Create one{" "}
              <span className="text-nft-highlight-color hover:text-nft-gray-2">
                <Link href="/create-nft">here</Link>
              </span>
            </p>
          </div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              <BestCreators topCreators={topCreators} />
            </div>
            {/* Best NFTS */}
            <div className="mt-10">
              <BestNFTs
                nfts={nfts}
                nftsCopy={nftsCopy}
                activeSelect={activeSelect}
                setActiveSelect={setActiveSelect}
                handleSearch={onHandleSearch}
                clearSearch={onClearSearch}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
