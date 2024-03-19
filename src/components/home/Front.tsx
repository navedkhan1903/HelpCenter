import Image from "next/image";
import main from "../../../public/main.jpg";
import Search from "@/components/shared/Search";

export default function Front() {
  return (
    <div className="mx-auto mb-60 flex h-auto w-10/12 translate-y-[77px] flex-col-reverse items-center justify-between gap-20 lg:mb-40 lg:h-[calc(100vh-77px)] lg:flex-row">
      <div className="lg:w-1/2">
        <div className="mb-5 flex w-max items-center rounded-full bg-primaryLight pr-5 text-sm">
          <p className="my-1 ml-1 mr-3 rounded-full bg-primary px-3 py-1 font-semibold">
            New
          </p>
          <p className="font-medium">25% off on Home Services</p>
        </div>
        <p className="mb-3 text-[14vw] font-semibold leading-none md:text-7xl lg:text-[6.5vw]">
          HelpCenter
        </p>
        <p className="text-[6vw] font-medium leading-none md:text-3xl lg:text-[2.5vw]">
          On-Demand Services
        </p>
        <p className="my-8 text-sm font-medium text-gray">
          Your wish, our command! Get what you need, when you need it, with just
          a click. Experience convenience like never before!
        </p>
        <Search />
        <p className="mt-8 text-sm font-medium text-gray">
          Ex: Cleaner, Swiper, Electrician, AC fixing, etc.
        </p>
      </div>
      <div className="mt-20 max-w-xs md:max-w-sm lg:mt-0 lg:max-w-max">
        <Image
          src={main}
          width={500}
          height={500}
          quality={96}
          alt="Worker Image"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
