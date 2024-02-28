import Header from "./Header";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";
import BookServiceClient from "./BookServiceClient";

export default function Wrapper({ service }: { service: {} }) {
  return (
    <>
      <Toaster />
      <div className="mt-[69.71px]">
        <Header service={service} />
        <div className="mx-auto my-20 w-10/12 rounded-lg md:w-8/12 md:p-14 md:shadow-sm lg:w-6/12">
          <BookServiceClient />
        </div>
      </div>
      <Footer />
    </>
  );
}
