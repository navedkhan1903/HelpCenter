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
      <p className="mb-20 mt-2 text-center text-sm font-medium text-gray">
        {subTitle}
      </p>
    </>
  );
}
