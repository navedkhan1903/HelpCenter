"use client";

import { useState } from "react";
import Lottie from "react-lottie";
import { services } from "@/utils/data";
import Reveal from "@/components/Reveal";
import DownArrow from "../../../lotties/DownArrow.json";
import ServiceCard from "@/app/main/services/ServiceCard";

export default function ServicesList() {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="mb-10 flex flex-col justify-center gap-7 md:flex-row">
        {services.slice(0, 3).map((service, i) => (
          <Reveal delay={i * 0.1} key={i}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
      {expand ? (
        <div className="mb-10 flex flex-col justify-center gap-7 md:flex-row">
          {services.slice(3, 6).map((service, i) => (
            <Reveal delay={i * 0.1} key={i}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div
          onClick={() => setExpand(!expand)}
          className="flex w-fit cursor-pointer items-center rounded-full bg-primaryLight px-1 py-1 pr-3 text-sm font-medium text-darkGray duration-200 hover:scale-105"
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
        </div>
      )}
    </>
  );
}
