import Reveal from "@/components/Reveal";
import Testimonial from "./Testimonial";
import SectionHeading from "@/components/SectionHeading";

export default function Testimonials() {
  // const res = await fetch(`${process.env.URL}/api/testimonials`, {
  //   cache: "no-cache",
  // }).then((res) => res.json());

  return (
    <div className="mx-auto mb-40 w-10/12">
      <Reveal delay={0}>
        <SectionHeading
          title="What People Say About Us"
          subTitle="Explore what people say about us"
        />
      </Reveal>
      {/* <Testimonial res={res} /> */}
    </div>
  );
}
