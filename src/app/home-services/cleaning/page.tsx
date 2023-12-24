import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { cleaningServices } from "@/utils/data";
import Footer from "@/components/footer/Footer";
import cleaning from "../../../../public/cleaning.jpg";
import SectionHeading from "@/components/SectionHeading";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const title = "Cleaning Services - HelpCenter";
const desc =
  "Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!";

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    title: title,
    description: desc,
    images: [
      {
        url: cleaning.src,
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    title: title,
    description: desc,
    images: [cleaning.src],
  },
};

export default function Cleaning() {
  return (
    <>
      <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[77px]">
        <Reveal delay={0}>
          <SectionHeading
            title="Cleaning Services"
            subTitle="Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cleaningServices.map((service, i) => (
            <div key={i} className="rounded-3xl border-[1px] border-lightGray">
              <Image
                className="rounded-t-3xl"
                src={service.image}
                quality={service.quality}
                width={400}
                height={400}
                alt={service.title}
                sizes="100vw"
                priority={true}
              />
              <div className="p-7">
                <p className="text-xl font-semibold text-darkGray">
                  {service.title}
                </p>
                <div className="my-2 flex h-max w-max items-center rounded-full bg-primaryLight px-2 py-1 text-xs font-medium">
                  {[...Array(service.rating)].map((_, i) => (
                    <AiFillStar
                      color="#FFD369"
                      size={15}
                      key={`startFilled-${i}`}
                    />
                  ))}
                  {[...Array(5 - service.rating)].map((_, i) => (
                    <AiOutlineStar
                      color="#FFD369"
                      size={15}
                      key={`starEmpty-${i}`}
                    />
                  ))}
                  <span className="pl-1">| {service.ratingCount}</span>
                </div>
                <p className="mb-7 border-b-[1px] border-dashed border-gray pb-5 text-sm font-semibold">
                  {service.price}
                </p>
                {service.services.map((point, i) => (
                  <li key={i} className="mb-3 text-xs font-medium text-gray">
                    {point}
                  </li>
                ))}
                <div className="mt-7 flex">
                  <button className="w-full rounded-md px-6 py-3 text-sm font-semibold duration-200">
                    View Details
                  </button>
                  <button className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold duration-200 hover:bg-primaryDark">
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
