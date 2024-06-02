import { maintenanceServices } from "@/utils/data";
import SubSubServicePage from "@/components/services/SubSubServicePage";

export default function Cleaning() {
  return (
    <SubSubServicePage
      title="Maintenance Services"
      subTitle="Anytime, Anywhere, We Maintain with Care"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Home", href: "/services/home" },
        { label: "Maintenance", href: "Maintenance" },
      ]}
      services={maintenanceServices}
    />
  );
}
