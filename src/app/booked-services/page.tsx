import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import Client from "@/components/booked-services/Client";
import { bookedServicesMetadata } from "@/utils/metadata";

export const metadata = bookedServicesMetadata;

export default function BookedServices() {
  return (
    <Session status="authenticated" path="/login">
      <Wrapper
        title="Booked Services"
        subTitle="Your schedule's so full, it's like your appointments booked themselves! Check out your service spree!"
      >
        <Client />
      </Wrapper>
    </Session>
  );
}
