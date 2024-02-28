import { cleaningServices } from "@/utils/data";
import Wrapper from "@/components/book-service/Wrapper";

export default function ApplianceCleaning() {
  return <Wrapper service={cleaningServices[0]} />;
}
