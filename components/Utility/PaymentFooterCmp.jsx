import Button from "./Button";

const PaymentFooterCmp = ({ setModalOpen, checkout }) => (
  <div className="flex flex-row sm:flex-col pb-1">
    <Button
      btnName="Checkout"
      classStyles="rounded-xl nft-gradient text-white mr-5 sm:mr-0 sm:mb-3"
      handleClick={checkout}
    />
    <Button
      btnName="Cancel"
      classStyles="rounded-xl border border-nft-highlight-color"
      handleClick={() => setModalOpen(false)}
    />
  </div>
);

export default PaymentFooterCmp;
