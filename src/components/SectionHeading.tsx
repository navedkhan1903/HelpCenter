interface Props {
  title: string;
  subTitle: string;
}

export default function SectionHeading({ title, subTitle }: Props) {
  return (
    <>
      <p className="text-center text-4xl font-semibold text-darkGray">
        {title}
      </p>
      <p className="mx-auto mt-2 w-80 text-center text-sm font-medium text-gray md:w-[450px]">
        {subTitle}
      </p>
      <div className="mx-auto mb-20 mt-5 h-1 w-24 bg-primary" />
    </>
  );
}
