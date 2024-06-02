import { lawnAndGardenServices } from "@/utils/data";
import SubSubServicePage from "@/components/services/SubSubServicePage";

export default function Cleaning() {
  return (
    <SubSubServicePage
      title="Lawn and Garden Services"
      subTitle="Green Your Space, Anytime, Anywhere - Lawn and Garden Care at Your Fingertips!"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Home", href: "/services/home" },
        { label: "Lawn and Garden", href: "lawn-and-garden" },
      ]}
      services={lawnAndGardenServices}
    />
  );
}
