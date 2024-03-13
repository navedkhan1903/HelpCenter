import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import { cleaningServices } from "@/utils/data";
import Session from "@/components/shared/Session";
import Header from "@/components/book-service/Header";
import ReduxProvider from "@/components/shared/ReduxProvider";
import BookServiceClient from "@/components/book-service/BookServiceClient";

export function generateStaticParams() {
  return [
    { id: "appliance-cleaning" },
    { id: "carpet-cleaning" },
    { id: "house-cleaning" },
  ];
}

export default function BookingPage({ params }: { params: any }) {
  const services: { [key: string]: any } = {
    "appliance-cleaning": cleaningServices[0],
    "carpet-cleaning": cleaningServices[1],
    "house-cleaning": cleaningServices[2],
  };

  return (
    <>
      <Toaster containerStyle={{ top: 75 }} />
      <Session status="authenticated" path="/login">
        <div className="mt-[69.71px]">
          <Header service={services[params.id]} />
          <div className="mx-auto my-20 w-10/12 rounded-lg md:w-8/12 md:p-14 lg:w-6/12">
            <ReduxProvider>
              <BookServiceClient service={services[params.id].title} />
            </ReduxProvider>
          </div>
        </div>
      </Session>
      <Footer />
    </>
  );
}
