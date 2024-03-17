import { IoFilter } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";
import DropDown from "@/components/shared/Dropdown";
import {
  servicesOptions,
  slotOptions,
  activeStatusOptions,
} from "@/utils/data";
import { useState } from "react";

interface Props {
  service: {};
  slot: {};
  status: {};
  setService: any;
  setSlot: any;
  setStatus: any;
  handleReset: () => void;
}

export default function Filter(props: Props) {
  const [visible, setVisible] = useState(false);

  const { service, slot, status, setService, setSlot, setStatus, handleReset } =
    props;

  return (
    <div className="mb-5 flex flex-col gap-5 rounded-md md:flex-row md:gap-10">
      <div className="flex w-full justify-between md:w-auto">
        <div
          onClick={() => setVisible((curr) => !curr)}
          className="flex items-center gap-2 text-sm font-semibold"
        >
          <IoFilter />
          Filter
          <BiChevronDown
            size={25}
            className={`rotate-${visible ? "180" : "0"} duration-200 md:hidden`}
          />
        </div>
        <button
          onClick={handleReset}
          className="rounded-full bg-neutral-100 p-4 text-sm duration-200 hover:bg-neutral-200 md:hidden"
        >
          <GrPowerReset />
        </button>
      </div>
      <div
        className={`${
          visible
            ? "h-[181px] opacity-100 md:h-auto"
            : "h-0 overflow-hidden opacity-0 md:h-auto"
        } flex w-full flex-col items-center gap-5 duration-200 md:flex-row md:gap-10 md:overflow-visible`}
      >
        <DropDown
          options={servicesOptions}
          onChange={setService}
          value={service}
          placeholder="Service"
        />
        <DropDown
          options={slotOptions}
          onChange={setSlot}
          value={slot}
          placeholder="Slot"
        />
        <DropDown
          options={activeStatusOptions}
          onChange={setStatus}
          value={status}
          placeholder="Status"
        />
      </div>
      <button
        onClick={handleReset}
        className="hidden rounded-full bg-neutral-100 p-4 text-sm duration-200 hover:bg-neutral-200 md:block"
      >
        <GrPowerReset />
      </button>
    </div>
  );
}
