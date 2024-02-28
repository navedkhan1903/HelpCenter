import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { RiPriceTag3Line } from "react-icons/ri";

export default function Header({ service }: { service: any }) {
  return (
    <div className="flex h-64 flex-col justify-center overflow-hidden bg-black">
      <Image
        src={service.image}
        alt="Background"
        className="h-auto w-full opacity-50"
        quality={service.quality}
        sizes="100vw"
        priority={true}
        placeholder="blur"
      />
      <div className="absolute h-[260px] w-full bg-gradient-to-b from-transparent to-black" />
      <div className="absolute w-full">
        <div className="mx-auto w-10/12">
          <div className="w-12/12 md:w-7/12 lg:w-6/12">
            <h1 className="text-3xl font-semibold text-lightGray md:text-4xl">
              {service.title}
            </h1>
            <h2 className="mt-5 text-sm font-medium text-[#bfbfbf]">
              {service.desc}
            </h2>
            <div className="mt-5 flex text-sm font-medium text-white">
              <div className="flex items-center gap-1 border-r-[1px] pr-5">
                <AiOutlineStar />
                {service.rating}
              </div>
              <div className="flex items-center gap-1 border-r-[1px] px-5">
                <RiPriceTag3Line />
                {service.price}
              </div>
              <div className="flex items-center gap-1 pl-5">
                <FaRegClock />
                {service.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
