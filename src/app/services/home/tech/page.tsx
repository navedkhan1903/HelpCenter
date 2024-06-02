import { techServices } from "@/utils/data";
import SubSubServicePage from "@/components/services/SubSubServicePage";

export default function Cleaning() {
  return (
    <SubSubServicePage
      title="Tech Services"
      subTitle="Tech Help, On Demand: Solving Your Tech Woes Anytime, Anywhere!"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Home", href: "/services/home" },
        { label: "Tech", href: "tech" },
      ]}
      services={techServices}
    />
  );
}
