import type { Metadata } from "next";
import { services } from "@/utils/data";
import Wrapper from "@/components/shared/Wrapper";
import { servicesMetadata } from "@/utils/metadata";
import { servicesBreadcrumb } from "@/utils/scripts";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = servicesMetadata;

export default function HomeServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={servicesBreadcrumb}
      />
      <Wrapper
        title="Our Services"
        subTitle="Swift solutions tailored to your needs – On-demand excellence, always at your fingertips."
      >
        <div className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-3 md:place-items-start">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
