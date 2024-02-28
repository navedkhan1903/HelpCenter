import { FaRegClock } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface Props {
  step1: Boolean;
  step2: Boolean;
  step3: Boolean;
}

export default function CurrStep({ step1, step2, step3 }: Props) {
  return (
    <div className="flex items-center gap-5">
      <div className="border-r-[1px] border-gray pr-5">
        {step1 ? (
          <IoCalendarClearOutline size="25" />
        ) : step2 ? (
          <FaRegClock size="25" />
        ) : (
          <HiOutlineLocationMarker size="25" />
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-gray">
          STEP {step1 ? "1" : step2 ? "2" : "3"}
        </p>
        <p className="text-lg font-semibold">
          Select {step1 ? "Date" : step2 ? "Slot" : "Address"}
        </p>
      </div>
    </div>
  );
}
