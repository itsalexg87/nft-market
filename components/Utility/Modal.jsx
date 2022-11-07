import { useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import images from "../../assets";

const Modal = ({ setModalOpen, header, body, footer }) => {
  const modalRef = useRef(null);
  const { theme } = useTheme();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  };
  return (
    <div className="flexCenter fixed inset-0 z-10 bg-overlay-black animated fadeIn" onClick={handleClickOutside}>
      <div className="w-3/5 md:w-11/12 minlg:w-2/4 dark:bg-nft-dark bg-white flex flex-col rounded-lg" ref={modalRef}>
        {/* Close Modal */}
        <div className="flex justify-end mt-4 mr-4 minlg:mt-6 minlg:mr-6">
          <div className="relative w-3 h-3 minlg:w-6 minlg:h-6 cursor-pointer" onClick={() => setModalOpen(false)}>
            <Image src={images.cross} layout="fill" className={theme === "light" ? "filter invert" : ""} />
          </div>
        </div>
        {/* Header */}
        <div className="flexCenter w-full text-center p-4">
          <h2 className="uppercase font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl">{header}</h2>
        </div>
        {/* Body */}
        <div className="p-10 sm:px-4 border-t border-b dark:border-nft-black-3 border-nft-gray-1">{body}</div>
        {/* Footer */}
        <div className="flexCenter p-4">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
