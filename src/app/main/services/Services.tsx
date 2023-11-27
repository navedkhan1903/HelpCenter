import Reveal from "@/components/Reveal";
import ServicesList from "./ServicesList";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <div className="mx-auto mb-40 flex w-10/12 flex-col items-center">
      <Reveal delay={0}>
        <SectionHeading
          title="Our Services"
          subTitle="Explore the Services of Our Platform"
        />
      </Reveal>
      <ServicesList />
    </div>
  );
}
