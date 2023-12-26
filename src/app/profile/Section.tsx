"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  label: String;
  icon: JSX.Element;
  children: JSX.Element;
}

export default function Section({ label, icon, children }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-5 rounded-md">
      <div className="flex items-center justify-between bg-neutral-50 p-5 text-darkGray">
        <div className="flex items-center gap-3">
          {icon}
          <p className="font-medium">{label}</p>
        </div>
        <button
          onClick={() => setVisible((prev) => !prev)}
          className={`${visible ? "rotate-180" : "rotate-0"} duration-200`}
        >
          <BiChevronDown size={25} color="#1a1a1a" />
        </button>
      </div>
      <div className={`${visible && "h-20"} h-0 overflow-hidden duration-200`}>
        {children}
      </div>
    </div>
  );
}
