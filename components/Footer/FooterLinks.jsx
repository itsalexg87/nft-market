const FooterLinks = ({ items, heading }) => {
  return (
    <div className="flex-1 justify-start items-start">
      <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-5">{heading}</h3>
      {items.map((item, index) => (
        <p
          key={index}
          className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">
          {item}
        </p>
      ))}
    </div>
  );
};

export default FooterLinks;
