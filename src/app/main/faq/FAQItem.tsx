"use client";

import { BiChevronDown } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [visible]);

  return (
    <button
      onClick={() => setVisible((prev) => !prev)}
      className="pb-3 pt-6 text-left"
    >
      <div className="flex items-center justify-between gap-5">
        <p className="font-bold">{q}</p>
        <div className={`rotate-${visible ? "180" : "0"} duration-200`}>
          <BiChevronDown size={25} />
        </div>
      </div>

      <div
        style={{ height: visible ? `${contentHeight}px` : "0" }}
        className="mt-3 overflow-hidden pr-10 font-medium leading-6 text-gray duration-200"
      >
        <p ref={contentRef}>{a}</p>
      </div>
    </button>
  );
}
