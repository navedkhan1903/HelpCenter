"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <button
      onClick={() => setVisible((prev) => !prev)}
      className="pb-3 pt-6 text-left"
    >
      <div className="flex items-center justify-between gap-5">
        <p className="font-bold text-darkGray">{q}</p>
        <div className={`${visible ? "rotate-180" : "rotate-0"} duration-200`}>
          <BiChevronDown size={25} color="#1a1a1a" />
        </div>
      </div>

      <p
        className={`${
          visible && "h-20"
        } mt-3 h-0 overflow-hidden pr-10 font-medium leading-6 text-gray duration-200`}
      >
        {a}
      </p>
    </button>
  );
}
