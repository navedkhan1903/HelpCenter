import { Toaster } from "react-hot-toast";
import { notFound } from "next/navigation";
import "@/components/book-service/Calendar.css";
import { cleaningServices } from "@/utils/data";
import Footer from "@/components/footer/Footer";
import Header from "@/components/book-service/Header";
import BookServiceClient from "@/components/book-service/BookServiceClient";

export default function BookService({ params }: { params: any }) {
  const service = cleaningServices.find(
    (service) =>
      service.title ===
      params.id
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
  );

  if (service) {
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
  return notFound();
}
