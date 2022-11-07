export const generateLink = (index) => {
  switch (index) {
    case 0:
      return "/";
    case 1:
      return "/listed-nfts";
    case 2:
      return "/my-nfts";
    case 3:
      return "/info";
    default:
      return "/";
  }
};

export const menuList = ["Explore NFTs", "Listed NFTs", "My NFTs", "How it works"];

export const footerListOne = ["Explore", "How it Works", "Contact us"];
export const footerListTwo = ["Help Center", "Terms of Service", "Legal", "Privacy Policy"];
