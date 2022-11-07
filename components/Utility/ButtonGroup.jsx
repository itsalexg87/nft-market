import { Button } from "..";

const ButtonGroup = ({ setActive, router, isMobile, setIsOpen, connectWallet, currentAccount }) => {
  // console.log({ currentAccount });
  return currentAccount ? (
    <Button
      btnName="Create"
      classStyles={`mx-2 rounded-xl nft-gradient text-white ${isMobile ? "text-3xl" : "text-sm"}`}
      handleClick={() => {
        setActive("");
        if (isMobile) {
          setIsOpen(false);
        }
        router.push("/create-nft");
      }}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles={`mx-2 rounded-xl border border-nft-highlight-color ${isMobile ? "text-3xl" : "text-sm"}`}
      handleClick={() => {
        connectWallet();
        if (isMobile) {
          setIsOpen(false);
        }
      }}
    />
  );
};

export default ButtonGroup;
