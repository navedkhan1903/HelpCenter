import { handymanServices } from "@/utils/data";
import SubSubServicePage from "@/components/services/SubSubServicePage";

export default function Cleaning() {
  return (
    <SubSubServicePage
      title="Handyman Services"
      subTitle="From leaky faucets to wobbly tables, we're the fixers who turn 'Uh-oh' into 'All fixed!!"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Home", href: "/services/home" },
        { label: "Handyman", href: "handyman" },
      ]}
      services={handymanServices}
    />
  );
}
