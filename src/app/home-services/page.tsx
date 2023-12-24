import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { homeServices } from "@/utils/data";
import Footer from "@/components/footer/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const title = "Home Services - HelpCenter";
const desc =
  "Because life's too short for household hassles – let us handle the to-dos while you focus on the ta-das!";

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    title: title,
    description: desc,
    images: [
      {
        url: "../../../public/home.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    title: title,
    description: desc,
    images: ["../../../public/home.jpg"],
  },
};

export default function HomeServices() {
  return (
    <>
      <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[77px]">
        <Reveal delay={0}>
          <SectionHeading
            title="Home Services"
            subTitle="Because life's too short for household hassles – let us handle the to-dos while you focus on the ta-das!"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-3 md:place-items-start">
            {homeServices.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </Reveal>
      </div>
      <Footer />
    </>
  );
}
