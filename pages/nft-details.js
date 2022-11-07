import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { NFTContext } from "../context/NFTContext";
import { NFTCard, Loader, Button, Modal, PaymentBodyCmp, PaymentFooterCmp } from "../components";
import { shortenAddress } from "../utils/shortenAddress";
import images from "../assets";

const NFTDetails = () => {
  const { currentAccount, nftCurrency, buyNFT, isLoadingNFT } = useContext(NFTContext);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
    description: "",
    tokenURI: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
    setIsLoading(false);
  }, [router.isReady]);

  const checkout = async () => {
    await buyNFT(nft);
    setModalOpen(false);
    setSuccessModal(true);
  };

  if (isLoading)
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="relative flex justify-center md:flex-col min-h-screen">
      {/* Image */}
      <div className="relative flex-1 flex justify-center items-start sm:px-4 p-12 border-r md:border-r-0 md:border-b dark:border-nft-black-1 border-nft-gray-1">
        <div className="relative w-557 minmd:w-2/3 minmd:h-2/3 sm:w-full sm:h-300 h-557">
          <Image src={nft?.image} objectFit="cover" className="rounded-xl shadow-lg" layout="fill" />
        </div>
      </div>
      {/* All Details */}
      <div className="flex-1 justify-start sm:px-4 p-12 sm:pb-4">
        {/* NFT Name */}
        <div className="flex flex-row sm:flex-col">
          <h2 className="font-poppins text-nft-highlight-color font-semibold text-2xl minlg:text-3xl">{nft.name}</h2>
        </div>
        {/* Owners Details */}
        <div className="mt-10">
          <p className="font-poppins dark:text-white text-nft-black-1 text-xs minlg:text-base font-normal">Owner</p>

          <div className="flex flex-row items-center mt-3">
            <div className="relative w-12 h-12 minlg:w-20 minlg:h-20 mr-2">
              <Image src={images.creator1} objectFit="cover" className="rounded-full" />
            </div>
            <p className="font-poppins dark:text-white text-nft-black-1 text-xs minlg:text-base font-semibold">
              {shortenAddress(nft.seller)}
            </p>
          </div>
        </div>
        {/* More Details */}
        <div className="mt-10 flex flex-col">
          <div className="w-full border-b dark:border-nft-black-1 border-nft-gray-1 flex flex-row">
            <p className="font-poppins dark:text-white text-nft-black-1 text-base font-medium mb-2">Description</p>
          </div>
          <div className="mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 text-base font-normal">{nft.description}</p>
          </div>
        </div>
        {/* Button Area */}
        <div className="flex flex-row sm:flex-col mt-10">
          {currentAccount === nft.seller.toLowerCase() ? (
            <p className="font-poppins dark:text-white text-nft-black-1 text-base font-normal border border-gray p-2">
              You cannot buy your own NFT
            </p>
          ) : currentAccount === nft.owner.toLowerCase() ? (
            <Button
              btnName="Sell NFT"
              classStyles="mr-5 sm:mr-0 rounded-xl nft-gradient text-white text-lg"
              handleClick={() =>
                router.push(`/resell-nft?tokenId=${nft.tokenId}&tokenURI=${nft.tokenURI}&buyPrice=${nft.price}`)
              }
            />
          ) : (
            <Button
              btnName={`Buy for ${nft.price} ${nftCurrency}`}
              classStyles="mr-5 sm:mr-0 rounded-xl nft-gradient text-white text-lg"
              handleClick={() => setModalOpen(true)}
            />
          )}
        </div>
      </div>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          header="New Order"
          body={<PaymentBodyCmp nft={nft} nftCurrency={nftCurrency} />}
          footer={<PaymentFooterCmp setModalOpen={setModalOpen} checkout={checkout} />}
        />
      )}
      {isLoadingNFT && (
        <Modal
          setModalOpen={setModalOpen}
          header="Buying NFT ..."
          body={
            <div className="flexCenter flex-col text-center">
              <div className="relative w-52 h-52">
                <Loader />
              </div>
            </div>
          }
        />
      )}
      {successModal && (
        <Modal
          header="Payment Successful"
          setModalOpen={setSuccessModal}
          body={
            <div
              className="flexCenter flex-col text-center"
              onClick={() => {
                setSuccesModal(false);
              }}>
              <div className="relative w-52 h-52">
                <Image src={nft.image} objectFit="cover" layout="fill" className="rounded-xl" />
              </div>
              <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl mt-10">
                You purchased&nbsp;
                <span className="font-semibold text-nft-highlight-color">{nft.name} </span>
                <span> from </span>
                <span className="font-semibold text-nft-highlight-color">{shortenAddress(nft.seller)}</span>
              </p>
            </div>
          }
          footer={
            <div className="flexCenter flex-col">
              <Button
                btnName="Check it out"
                classStyles="rounded-xl nft-gradient text-white"
                handleClick={() => router.push("/my-nfts")}
              />
            </div>
          }
        />
      )}
    </div>
  );
};

export default NFTDetails;
