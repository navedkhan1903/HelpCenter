import FAQ from "@/components/home/faq/FAQ";
import Front from "@/components/home/Front";
import Footer from "@/components/footer/Footer";
import Numbers from "@/components/home/Numbers";
import Features from "@/components/home/Features";
import NewsLetter from "@/components/home/NewsLetter";
import Services from "@/components/home/services/Services";
import Testimonials from "../components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Front />
      <Numbers />
      <Features />
      <Services />
      {/* <Testimonials /> */}
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  );
}
