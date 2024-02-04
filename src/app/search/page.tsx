import Reveal from "@/components/Reveal";
import Search from "@/components/Search";
import NoResult from "@/components/NoResult";
import Footer from "@/components/footer/Footer";
import { cleaningServices } from "@/utils/data";
import SubServiceCard from "@/components/services/SubServiceCard";
import SectionHeading from "@/components/SectionHeading";
import { capitalizeFirstLetterOfEachWord } from "@/utils/functions";

export function generateMetadata({ searchParams }: { searchParams: any }) {
  const title =
    capitalizeFirstLetterOfEachWord(searchParams.q) + " - HelpCenter";
  const desc =
    "Discover, Click, and Voila! Because finding the right service shouldn't be harder than searching for your lost TV remote.";

  return {
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
    },
    twitter: {
      title: title,
      description: desc,
    },
  };
}

export default function SearchPage({ searchParams }: { searchParams: any }) {
  const results = [];
  const query = searchParams.q
    .replaceAll(" ", "")
    .toLowerCase()
    .replace(/services?/g, "");
  const matches = cleaningServices.filter((service) =>
    service.tags.includes(query),
  );
  results.push(...matches);

  return (
    <>
      <Reveal delay={0}>
        <div className="mx-auto mb-40 mt-20 flex w-10/12 translate-y-[69.71px] flex-col items-center">
          <SectionHeading
            title={`Showing results for '${searchParams.q}'`}
            subTitle="Discover, Click, and Voila! Because finding the right service shouldn't be harder than searching for your lost TV remote."
          />
          <Search />
          <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {results.map((service, i) => (
              <SubServiceCard key={i} service={service} />
            ))}
          </div>
          {results.length === 0 && (
            <NoResult
              title="No Results Found"
              subtitle="We couldn't find what you're looking for..."
            />
          )}
        </div>
      </Reveal>
      <Footer />
    </>
  );
}
