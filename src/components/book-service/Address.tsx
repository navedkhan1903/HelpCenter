import { motion } from "framer-motion";

interface Props {
  addresses: any[] | undefined;
  selectedAddress: {} | undefined;
  setSelectedAddress: any;
}

export default function Address(props: Props) {
  const { addresses, selectedAddress, setSelectedAddress } = props;

  return (
    <>
      {addresses?.map((address: any, i: any) => (
        <div className="w-full">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            onClick={() => setSelectedAddress(i + 1)}
            className={`${
              selectedAddress && selectedAddress === i + 1
                ? "border-[1px] border-darkGray bg-primaryLight"
                : "border-[1px] border-lightGray"
            } hover:bg-primaryLigh cursor-pointer rounded-md p-5 font-medium duration-200`}
          >
            <p className="text-xs font-medium text-gray">
              {address.phone}
              {address.altPhone && ", " + address.altPhone}
            </p>
            <p className="text-sm font-semibold">
              {address.address}, {address.locality}, {address.city},{" "}
              {address.state}, {address.pincode}
            </p>
          </motion.div>
        </div>
      ))}
    </>
  );
}
