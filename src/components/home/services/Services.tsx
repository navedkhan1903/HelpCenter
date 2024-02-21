import ServicesList from "./ServicesList";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Services() {
  return (
    <div className="mx-auto mb-40 flex w-10/12 flex-col items-center">
      <Reveal delay={0}>
        <SectionHeading
          title="Our Services"
          subTitle="Swift solutions tailored to your needs – On-demand excellence, always at your fingertips."
        />
      </Reveal>
      <ServicesList />
    </div>
  );
}
