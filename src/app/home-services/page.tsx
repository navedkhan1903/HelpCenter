import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { homeServices } from "@/utils/data";
import home from "../../../public/home.jpg";
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
    images: [{ url: home.src }],
  },
  twitter: {
    title: title,
    description: desc,
    images: [home.src],
  },
};

export default function HomeServices() {
  return (
    <>
      <Reveal delay={0}>
        <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[69.71px]">
          <SectionHeading
            title="Home Services"
            subTitle="Because life's too short for household hassles – let us handle the to-dos while you focus on the ta-das!"
          />
          <div className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-3 md:place-items-start">
            {homeServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </Reveal>
      <Footer />
    </>
  );
}
