"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence, animate } from "framer-motion";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onClick={() => setVisible((prev) => !prev)}
      className="cursor-pointer py-6"
    >
      <div className="flex items-center justify-between gap-5">
        <p className="font-bold text-darkGray">{q}</p>
        <div className={`${visible ? "rotate-180" : "rotate-0"} duration-200`}>
          <BiChevronDown size={25} color="#1a1a1a" />
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          animate={visible ? "open" : "close"}
          variants={{
            open: { y: "0px", opacity: 1 },
            close: { y: "-10px", opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          <p
            className={`${
              visible ? "mt-6 h-auto overflow-visible" : ""
            } h-0 overflow-hidden pr-10 font-medium leading-6 text-gray duration-200`}
          >
            {a}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
