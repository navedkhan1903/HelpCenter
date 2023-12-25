import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { cleaningServices } from "@/utils/data";
import Footer from "@/components/footer/Footer";
import cleaning from "../../../../public/cleaning.jpg";
import SectionHeading from "@/components/SectionHeading";
import SubServiceCard from "@/components/SubServiceCard";

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
      <Reveal delay={0}>
        <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[69.71px]">
          <SectionHeading
            title="Cleaning Services"
            subTitle="Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!"
          />
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {cleaningServices.map((service, i) => (
              <SubServiceCard service={service} key={i} />
            ))}
          </div>
        </div>
      </Reveal>
      <Footer />
    </>
  );
}
