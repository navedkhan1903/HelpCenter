import FAQItem from "./FAQItem";
import { faq } from "@/utils/data";
import Reveal from "@/components/Reveal";
import { faqScript } from "@/utils/scripts";
import SectionHeading from "@/components/SectionHeading";

export default function FAQ() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <div className="mx-auto mb-40 flex w-10/12 flex-col items-center">
        <Reveal delay={0}>
          <SectionHeading
            title="FAQs"
            subTitle="Answers to your burning questions – Explore our FAQs for clarity and confidence in every click."
          />
        </Reveal>
        <div className="flex flex-col text-sm md:w-9/12 lg:w-7/12">
          {faq.map((item, i) => (
            <div
              key={i}
              className="border-b-2 border-neutral-100 last:border-b-0"
            >
              <Reveal delay={i * 0.01}>
                <FAQItem {...item} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
