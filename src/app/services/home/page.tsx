import type { Metadata } from "next";
import { homeServices } from "@/utils/data";
import Wrapper from "@/components/shared/Wrapper";
import { homeServicesMetadata } from "@/utils/metadata";
import { homeServicesBreadcrumb } from "@/utils/scripts";
import ServiceCard from "@/components/services/ServiceCard";
import Breadcrumbs from "@/components/services/Breadcrumbs";

export const metadata: Metadata = homeServicesMetadata;

export default function HomeServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={homeServicesBreadcrumb}
      />
      <Wrapper
        title="Home Services"
        subTitle="Because life's too short for household hassles – let us handle the to-dos while you focus on the ta-das!"
      >
        <>
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Home", href: "home" },
            ]}
          />
          <div className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-3 md:place-items-start">
            {homeServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </>
      </Wrapper>
    </>
  );
}
