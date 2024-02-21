"use client";

import { useState } from "react";
import Lottie from "react-lottie";
import { services } from "@/utils/data";
import Reveal from "@/components/shared/Reveal";
import DownArrow from "@/lotties/DownArrow.json";
import ServiceCard from "@/components/services/ServiceCard";

export default function ServicesList() {
  const [expand, setExpand] = useState(false);

  const renderServiceSlice = (start: number, end: number) => (
    <div className="flex flex-col justify-center gap-7 md:flex-row">
      {services.slice(start, end).map((service, i) => (
        <Reveal delay={i * 0.1} key={i}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );

  return (
    <>
      {renderServiceSlice(0, 3)}
      {expand ? (
        renderServiceSlice(3, 6)
      ) : (
        <button
          onClick={() => setExpand(!expand)}
          className="flex items-center rounded-full bg-primaryLight px-1 py-1 pr-3 text-sm font-medium duration-200 hover:scale-105"
        >
          <div className="mr-2 rounded-full bg-primary p-1">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: DownArrow,
              }}
              height={20}
              width={20}
            />
          </div>
          See more
        </button>
      )}
    </>
  );
}
