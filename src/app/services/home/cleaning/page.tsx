import { cleaningServices } from "@/utils/data";
import { cleaningMetadata } from "@/utils/metadata";
import { cleaningBreadcrumb } from "@/utils/scripts";
import SubSubServicePage from "@/components/services/SubSubServicePage";

export const metadata = cleaningMetadata;

export default function Cleaning() {
  return (
    <SubSubServicePage
      script={cleaningBreadcrumb}
      title="Cleaning Services"
      subTitle="Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Home", href: "/services/home" },
        { label: "Cleaning", href: "cleaning" },
      ]}
      services={cleaningServices}
    />
  );
}
