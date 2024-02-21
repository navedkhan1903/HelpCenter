import Testimonial from "./Testimonial";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default async function Testimonials() {
  const res = await fetch(`${process.env.URL}/api/testimonials`, {
    next: { revalidate: 0 },
  }).then((res) => res.json());

  return (
    <div className="mx-auto mb-40 w-10/12">
      <Reveal delay={0}>
        <SectionHeading
          title="What People Say About Us"
          subTitle="Raving Reviews: Our clients speak – Seamless, reliable, and a game-changer. See what they're saying!"
        />
      </Reveal>
      <Testimonial res={res} />
    </div>
  );
}
