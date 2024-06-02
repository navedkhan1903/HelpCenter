import { homeImprovementServices } from "@/utils/data";
import SubSubServicePage from "@/components/services/SubSubServicePage";

export default function Cleaning() {
  return (
    <SubSubServicePage
      title="Home Improvement Services"
      subTitle="Transform Your Home with a Tap – Expert Services, Anytime, Anywhere!"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Home", href: "/services/home" },
        { label: "Home Improvement", href: "home-improvement" },
      ]}
      services={homeImprovementServices}
    />
  );
}
