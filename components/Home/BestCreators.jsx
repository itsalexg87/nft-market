import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CreatorCard } from "..";
import { useTheme } from "next-themes";
import { makeId } from "../../utils/makeId";

import images from "../../assets";
import { shortenAddress } from "../../utils/shortenAddress";

const BestCreators = ({ topCreators }) => {
  const [hideButtons, setHideButtons] = useState(false);
  const { theme } = useTheme();
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  // Scroll Arrow Function
  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // Show Arrow Buttons?
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);
    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });
  return (
    <>
      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0 uppercase">
        Best <span className="text-nft-highlight-color">Creators</span>
      </h1>
      <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
        <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
          {topCreators.slice(0, 10).map((creator, i) => (
            <CreatorCard
              key={creator.seller}
              rank={i + 1}
              creatorImage={images[`creator${i + 1}`]}
              creatorName={shortenAddress(creator.seller)}
              creatorEths={creator.sum}
            />
          ))}
          {/* {[6, 7, 8, 9, 10].map((i) => (
            <CreatorCard
              key={`creator-${i}`}
              rank={i}
              creatorImage={images[`creator${i}`]}
              creatorName={`0x${makeId(3)}...${makeId(4)}`}
              creatorEths={10 - i * 0.5}
            />
          ))} */}
          {/* Buttons */}
          {!hideButtons && (
            <>
              <div
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                onClick={() => handleScroll("left")}>
                <Image
                  src={images.left}
                  layout="fill"
                  objectFit="contain"
                  alt="left_arrow"
                  className={theme === "light" ? "filter invert" : ""}
                />
              </div>
              <div
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                onClick={() => handleScroll("right")}>
                <Image
                  src={images.right}
                  layout="fill"
                  objectFit="contain"
                  alt="left_arrow"
                  className={theme === "light" ? "filter invert" : ""}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BestCreators;
