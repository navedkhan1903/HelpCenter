import Reveal from "@/components/Reveal";
import { testimonials } from "@/utils/data";
import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/app/main/testimonials/Testimonial";

export default function Testimonials() {
  return (
    <div className="mx-auto mb-40 w-10/12">
      <Reveal delay={0}>
        <SectionHeading
          title="What People Say About Us"
          subTitle="Explore what people say about us"
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="md:last:hidden lg:last:block">
            <Reveal delay={i * 0.1}>
              <Testimonial {...testimonial} />
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
