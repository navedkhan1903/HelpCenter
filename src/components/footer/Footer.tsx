import { BiCopyright } from "react-icons/bi";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="mx-auto bg-darkGray pb-7 font-semibold">
      <div className="grid grid-cols-8 gap-10 py-20">
        <div className="col-start-2 col-end-6 md:col-start-2 md:col-end-4">
          <p className="mb-3 text-xl text-lightGray">HelpCenter</p>
          <p className="text-sm font-medium text-[#828282]">
            Your wish, our command! Get what you need, when you need it, with
            just a click. Experience convenience like never before!
          </p>
        </div>
        <div className="col-span-2 col-start-6 md:col-span-1 md:col-start-4">
          <FooterItem
            title="Quick Links"
            items={["Guarantee", "Report Bug", "Help"]}
          />
        </div>
        <div className="col-span-2 col-start-2 md:col-span-1 md:col-start-5">
          <FooterItem
            title="Business"
            items={["Privacy Policy", "Terms & Conditions", "Blogs"]}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <FooterItem
            items={["Privacy Policy", "Terms & Conditions", "Testimonials"]}
            title="About"
          />
        </div>
        <FooterItem
          title="Extras"
          items={["Privacy Policy", "Testimonials", "Blogs"]}
        />
      </div>
      <div className="h-0.5 bg-gradient-to-r from-darkGray via-gray to-darkGray" />
      <div className="mt-7 flex items-center justify-center text-sm">
        <BiCopyright color="#f2f2f2" />
        <p className="ml-1 font-semibold text-lightGray">
          2023 HelpCenter<sup>TM</sup>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
