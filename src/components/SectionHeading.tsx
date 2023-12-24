interface Props {
  title: string;
  subTitle: string;
}

export default function SectionHeading({ title, subTitle }: Props) {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold text-darkGray">
        {title}
      </h1>
      <h2 className="mx-auto mt-2 w-80 text-center text-sm font-medium text-gray md:w-[450px]">
        {subTitle}
      </h2>
      <div className="mx-auto mb-20 mt-5 h-1 w-24 bg-primary" />
    </>
  );
}
