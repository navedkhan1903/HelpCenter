import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import Session from "@/components/shared/Session";
import Header from "@/components/book-service/Header";
import ReduxProvider from "@/components/shared/ReduxProvider";
import { staticMeta, servicesMap, servicesList } from "@/utils/data";
import BookServiceClient from "@/components/book-service/BookServiceClient";

export function generateStaticParams() {
  return servicesList;
}

export function generateMetadata({ params }: { params: any }) {
  return staticMeta[params.id];
}

export default function BookingPage({ params }: { params: any }) {
  return (
    <>
      <Toaster containerStyle={{ top: 75 }} />
      <Session status="authenticated" path="/login">
        <div className="mt-[69.71px]">
          <Header service={servicesMap[params.id]} />
          <div className="mx-auto my-20 w-10/12 md:w-8/12 lg:w-5/12">
            <ReduxProvider>
              <BookServiceClient service={servicesMap[params.id].title} />
            </ReduxProvider>
          </div>
        </div>
      </Session>
      <Footer />
    </>
  );
}
