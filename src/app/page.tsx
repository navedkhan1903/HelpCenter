import Front from "./main/Front";
import FAQ from "./main/faq/FAQ";
import Numbers from "./main/Numbers";
import Features from "./main/Features";
import Footer from "./main/footer/Footer";
import NewsLetter from "./main/NewsLetter";
import Services from "./main/services/Services";
import Testimonials from "./main/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Front />
      <Numbers />
      <Features />
      <Services />
      <Testimonials />
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  );
}
