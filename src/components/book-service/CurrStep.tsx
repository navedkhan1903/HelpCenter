import { FaRegClock } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function CurrStep({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-5">
      <div className="border-r-[1px] border-gray pr-5">
        {step === 1 ? (
          <IoCalendarClearOutline size="25" />
        ) : step === 2 ? (
          <FaRegClock size="25" />
        ) : (
          <HiOutlineLocationMarker size="25" />
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-gray">STEP {step}</p>
        <p className="text-lg font-semibold">
          Select {step === 1 ? "Date" : step === 2 ? "Slot" : "Address"}
        </p>
      </div>
    </div>
  );
}
