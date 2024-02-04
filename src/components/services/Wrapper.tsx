import Reveal from "../Reveal";
import Footer from "../footer/Footer";
import SectionHeading from "../SectionHeading";

interface Props {
  title: string;
  subTitle: string;
  children: JSX.Element;
}

export default function Wrapper({ title, subTitle, children }: Props) {
  return (
    <>
      <Reveal delay={0}>
        <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[69.71px]">
          <SectionHeading title={title} subTitle={subTitle} />
          {children}
        </div>
      </Reveal>
      <Footer />
    </>
  );
}
