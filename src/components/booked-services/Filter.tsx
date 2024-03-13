import { IoFilter } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import DropDown from "@/components/shared/Dropdown";
import {
  servicesOptions,
  slotOptions,
  activeStatusOptions,
} from "@/utils/data";

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
  const { service, slot, status, setService, setSlot, setStatus, handleReset } =
    props;

  return (
    <div className="mb-5 flex items-center gap-10 rounded-md">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <IoFilter />
        Filter
      </div>
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
      <button
        onClick={handleReset}
        className="rounded-md bg-red-100 p-4 text-sm duration-200 hover:bg-red-200"
      >
        <GrPowerReset />
      </button>
    </div>
  );
}
