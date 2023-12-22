"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function TestimonialClient({ res }: { res: Array<{}> }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={25}
      pagination={{
        clickable: true,
      }}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      modules={[Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
    >
      {res.map((item: any, i: any) => (
        <SwiperSlide key={i}>
          <div className="mx-2 mb-20 rounded-xl py-8 shadow-sm">
            <div className="px-8">
              <FaQuoteLeft size={50} color="#FFD369" />
            </div>
            <p className="mb-8 border-b-2 border-neutral-100 px-8 py-8 text-sm font-semibold leading-6 text-gray">
              {item.review}
            </p>
            <div className="mx-8 flex items-center gap-4">
              <div className="overflow-hidden rounded-full">
                {/* <Image
            src={image}
            width={50}
            height={50}
            alt="User Image"
            quality={100}
          /> */}
              </div>
              <div className="text-lg font-semibold text-darkGray">
                {item.name}
                <div className="flex">
                  {[...Array(item.ratings)].map((_, i) => (
                    <AiFillStar
                      color="#FFD369"
                      size={15}
                      key={`startFilled-${i}`}
                    />
                  ))}
                  {[...Array(5 - item.ratings)].map((_, i) => (
                    <AiOutlineStar
                      color="#FFD369"
                      size={15}
                      key={`starEmpty-${i}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
