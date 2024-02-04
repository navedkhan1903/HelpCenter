import { features } from "@/utils/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Features() {
  return (
    <div className="mx-auto mb-40 w-10/12">
      <Reveal delay={0}>
        <SectionHeading
          title="Why Choose Us"
          subTitle="Choose us, because we turn 'I need it now' into 'I got it already' – where your convenience meets our commitment!"
        />
      </Reveal>
      <div className="grid grid-cols-1 md:mx-[5vw] lg:mx-0 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-5">
        {features.map((feature, i) => (
          <Reveal delay={i * 0.01} key={i}>
            <div className="flex flex-col items-start py-5 md:flex-row md:items-center md:gap-5">
              <div>{feature.icon}</div>
              <div>
                <p className="mb-2 text-2xl font-semibold">{feature.title}</p>
                <p className="text-sm font-medium text-gray">{feature.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
