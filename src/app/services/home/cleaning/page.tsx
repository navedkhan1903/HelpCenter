import type { Metadata } from "next";
import { cleaningServices } from "@/utils/data";
import { cleaningMetadata } from "@/utils/metadata";
import Wrapper from "@/components/services/Wrapper";
import SubServiceCard from "@/components/services/SubServiceCard";

export const metadata: Metadata = cleaningMetadata;

export default function Cleaning() {
  return (
    <Wrapper
      title="Cleaning Services"
      subTitle="Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!"
    >
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {cleaningServices.map((service, i) => (
          <SubServiceCard service={service} key={i} />
        ))}
      </div>
    </Wrapper>
  );
}
