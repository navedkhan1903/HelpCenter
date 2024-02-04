"use client";

import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  label: string;
  icon: JSX.Element;
  children: JSX.Element;
}

export default function Section({ label, icon, children }: Props) {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [visible, children]);

  return (
    <div
      className={`${
        visible && "border-[1px] border-lightGray"
      } mb-5 rounded-md`}
    >
      <div
        onClick={() => setVisible((prev) => !prev)}
        className={`${
          visible && "shadow-md"
        } flex cursor-pointer items-center justify-between rounded-md bg-neutral-50 p-5`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <p className="font-medium">{label}</p>
        </div>
        <div className={`${visible ? "rotate-180" : "rotate-0"} duration-200`}>
          <BiChevronDown size={25} />
        </div>
      </div>
      <div
        style={{ height: visible ? `${contentHeight}px` : "0" }}
        className="overflow-hidden duration-200"
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
