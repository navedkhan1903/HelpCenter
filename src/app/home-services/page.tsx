import { homeServices } from "@/utils/data";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/Reveal";

export default function HomeServices() {
  return (
    <>
      <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[77px]">
        <Reveal delay={0}>
          <SectionHeading
            title="Home Services"
            subTitle="Explore the Home Services of Our Platform"
          />
        </Reveal>

        <div className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-3">
          {homeServices.map((service, i) => (
            <Reveal delay={i * 0.1} key={i}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
