import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { MenuItems, MenuItemsMobile, ButtonGroup } from "..";

import images from "../../assets";
import { NFTContext } from "../../context/NFTContext";

const checkActive = (active, setActive, router) => {
  switch (router.pathname) {
    case "/":
      if (active !== "Explore NFTs") setActive("Explore NFTs");
      break;
    case "/listed-nfts":
      if (active !== "Listed NFTs") setActive("Listed NFTs");
      break;
    case "/my-nfts":
      if (active !== "My NFTs") setActive("My NFTs");
      break;
    case "/info":
      if (active !== "How it works") setActive("How it works");
      break;
    case "/nft-details":
      setActive("");
      break;
    case "/create-nft":
      setActive("");
      break;

    default:
      setActive("");
  }
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { connectWallet, currentAccount } = useContext(NFTContext);
  const [active, setActive] = useState("Explore NFTs");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname]);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        {/* Logo Responsive */}
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer">
            <p className="text-nft-highlight-color font-bold text-xl uppercase">NFT Next</p>
          </div>
        </Link>
        {/* Logo Normal */}
        <Link href="/">
          <div className="hidden md:flex cursor-pointer" onClick={() => {}}>
            <p className="text-nft-highlight-color font-bold text-lg uppercase">NFT Next</p>
          </div>
        </Link>
      </div>
      {/* Nav Items */}
      <div className="md:hidden flex">
        <MenuItems active={active} setActive={setActive} />
        {/* Buttons */}
        <div className="ml-2 mr-1">
          <ButtonGroup
            setActive={setActive}
            active={active}
            router={router}
            connectWallet={connectWallet}
            currentAccount={currentAccount}
          />
        </div>
      </div>
      {/* Switch Theme */}
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mx-3">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 md:mr-4 bg-black rounded-2xl p-1 relative label cursor-pointer">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="hidden md:flex ml-3">
        {isOpen ? (
          <Image
            src={images.cross}
            objectFit="contain"
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(false)}
            className={theme === "light" ? "filter invert" : ""}
          />
        ) : (
          <Image
            src={images.menu}
            objectFit="contain"
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={theme === "light" ? "filter invert" : ""}
          />
        )}
        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItemsMobile active={active} setActive={setActive} setIsOpen={setIsOpen} />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup
                setActive={setActive}
                router={router}
                setIsOpen={setIsOpen}
                isMobile
                connectWallet={connectWallet}
                currentAccount={currentAccount}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
