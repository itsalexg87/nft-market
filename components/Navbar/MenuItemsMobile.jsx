import Link from "next/link";
import { generateLink, menuList } from "../../utils/gerenateLink";

const MenuItemsMobile = ({ active, setActive, setIsOpen }) => {
  return (
    <ul className="list-none flex justify-center items-center flex-col h-full">
      {menuList.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setActive(item), setIsOpen(false);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-4xl my-5 dark:hover:text-white hover:text-nft-dark mx-3 ${
            active === item ? "dark:text-white text-nft-black-1" : "dark:text-nft-gray-3 text-nft-gray-2"
          }`}>
          <Link href={generateLink(index)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItemsMobile;
