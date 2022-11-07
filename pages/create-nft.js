import { useState, useMemo, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button, Input, Loader } from "../components";

import images from "../assets";
import { NFTContext } from "../context/NFTContext";

const CreateNFT = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { uploadToIPFS, createNFT, isLoadingNFT } = useContext(NFTContext);
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({ price: "", name: "", description: "" });

  const onDrop = useCallback(
    async (acceptedFile) => {
      const url = await uploadToIPFS(acceptedFile[0]);
      // console.log({ url });
      // console.log(fileUrl);
      setFileUrl(url);
    },
    [uploadToIPFS]
  );

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
      ${isDragActive && "border-file-active"} 
      ${isDragAccept && "border-file-accept"} 
      ${isDragReject && "border-file-reject"} 
      `,
    [isDragAccept, isDragActive, isDragReject]
  );

  if (isLoadingNFT)
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="flex justify-center sm:px-4 py-12 px-14">
      <div className="w-full minmd:w-4/5">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold uppercase">
          Create <span className="text-nft-highlight-color">new nft</span>
        </h1>
        <div className="mt-8 ">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload file</p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 text-lg">
                  JPG, PNG, GIF, SVG, WEBM. Max 5mb.
                </p>
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="file_upload"
                    className={theme === "light" ? "filter invert" : ""}
                  />
                </div>
                <p className="font-poppins dark:text-white text-nft-black-1 text-sm">Drag and drop file</p>
                <p className="font-poppins dark:text-white text-nft-black-1 text-sm">or browse Media on your device.</p>
              </div>
              {fileUrl && (
                <aside>
                  <div className="">
                    <img src={fileUrl} alt="asset_file" />
                  </div>
                </aside>
              )}
            </div>
          </div>
          <Input
            inputType="input"
            title="Name"
            placeholder="NFT Name"
            handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
          />
          <Input
            inputType="textarea"
            title="Description"
            placeholder="NFT Description"
            handleClick={(e) => setFormInput({ ...formInput, description: e.target.value })}
          />
          <Input
            inputType="number"
            title="Price"
            placeholder="NFT Price"
            handleClick={(e) => setFormInput({ ...formInput, price: e.target.value })}
          />
          <div className="mt-10 w-full flex justify-end">
            <Button
              btnName="Create NFT"
              handleClick={() => createNFT(formInput, fileUrl, router)}
              classStyles={"mx-2 rounded-xl nft-gradient text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
