import LottieWrapper from "./LottieWrapper";
import NoResults from "@/lotties/NoResults.json";

interface Props {
  title: string;
  subtitle: string;
}

export default function NoResult({ title, subtitle }: Props) {
  return (
    <>
      <LottieWrapper
        options={{
          loop: false,
          autoplay: true,
          animationData: NoResults,
        }}
        height={250}
        width={250}
      />
      <p className="pt-6 text-center text-lg font-semibold">{title}</p>
      <p className="pb-6 text-center text-sm font-medium text-gray">
        {subtitle}
      </p>
    </>
  );
}
