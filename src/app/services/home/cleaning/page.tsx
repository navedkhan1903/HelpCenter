import { Toaster } from "react-hot-toast";
import { cleaningServices } from "@/utils/data";
import Wrapper from "@/components/shared/Wrapper";
import { cleaningMetadata } from "@/utils/metadata";
import { cleaningBreadcrumb } from "@/utils/scripts";
import Breadcrumbs from "@/components/services/Breadcrumbs";
import SubServiceCard from "@/components/services/SubServiceCard";

export const metadata = cleaningMetadata;

export default function Cleaning() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={cleaningBreadcrumb}
      />
      <Toaster />
      <Wrapper
        title="Cleaning Services"
        subTitle="Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!"
      >
        <>
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Home", href: "/services/home" },
              { label: "Cleaning", href: "cleaning" },
            ]}
          />
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {cleaningServices.map((service, i) => (
              <SubServiceCard service={service} key={i} />
            ))}
          </div>
        </>
      </Wrapper>
    </>
  );
}
