import { motion } from "framer-motion";
import { timeSlots } from "@/utils/data";

interface Props {
  selectedSlot: String;
  setSelectedSlot: any;
}

export default function Slots({ selectedSlot, setSelectedSlot }: Props) {
  return (
    <div className="grid h-[335px] grid-cols-2 items-center gap-7">
      {timeSlots.map((slot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: i * 0.05 }}
          onClick={() => setSelectedSlot(slot.label)}
          className={`${
            selectedSlot && selectedSlot === slot.label
              ? "border-[1px] border-darkGray bg-primaryLight"
              : "border-[1px] border-lightGray"
          } cursor-pointer rounded-md p-7 duration-200 hover:bg-primaryLight`}
        >
          <div>
            {slot.icon}
            <p className="py-1 text-sm font-semibold">{slot.label}</p>
            <p className="text-xs font-medium text-gray">{slot.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
