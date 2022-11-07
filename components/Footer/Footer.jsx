import Link from "next/link";
import { useTheme } from "next-themes";

import { AiFillGithub } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16 pb-7 select-none">
      <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
          NFT Next - Portfolio App{" "}
          <span className="text-xs font-normal">
            (
            <Link href="/info">
              <span className="hover:text-nft-highlight-color text-nft-gray-2 cursor-pointer">Test Purpose</span>
            </Link>{" "}
            only)
          </span>
        </p>
        <div className="flex flex-row sm:mt-4">
          <div className="mx-2 cursor-pointer">
            <Link href="https://alexgauss.de">
              <a target="_blank" rel="noopener noreferrer">
                <GoBrowser className="w-8 h-8 hover:text-nft-gray-2" />
              </a>
            </Link>
          </div>
          <div className="mx-2 cursor-pointer">
            <Link href="https://github.com/itsalexg87">
              <a target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="w-8 h-8 hover:text-nft-gray-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* Top Footer */
}
{
  /* <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16"> */
}
// <div className="flexStart flex-1 flex-col">
{
  /* Left Top */
}
{
  /* <div className="flexCenter cursor-pointer"> */
}
{
  /* <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" /> */
}
{
  /* <p className="text-nft-highlight-color font-semibold text-lg">NFT Next</p>
    </div>
    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest Updates</p>
    <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
      <input
        type="email"
        placeholder="Your Email"
        className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-md outline-none"
      />
      <div className="flex-initial">
        <Button btnName="Email me" classStyles="rounded-md nft-gradient text-white" />
      </div>
    </div>
  </div> */
}
{
  /* Right Top */
}
{
  /* <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
    <FooterLinks items={footerListOne} heading="NFT Next" />
    <FooterLinks items={footerListTwo} heading="Support" />
  </div>
</div>; */
}
