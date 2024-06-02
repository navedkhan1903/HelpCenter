import Reveal from "@/components/shared/Reveal";
import Search from "@/components/shared/Search";
import Footer from "@/components/footer/Footer";
import NoResult from "@/components/shared/NoResult";
import SectionHeading from "@/components/shared/SectionHeading";
import SubServiceCard from "@/components/services/SubServiceCard";
import { capitalizeFirstLetterOfEachWord } from "@/utils/functions";
import {
  cleaningServices,
  handymanServices,
  homeImprovementServices,
  lawnAndGardenServices,
  maintenanceServices,
  techServices,
} from "@/utils/data";

export function generateMetadata({ searchParams }: { searchParams: any }) {
  const title =
    capitalizeFirstLetterOfEachWord(searchParams.q) + " - HelpCenter";
  const description =
    "Discover, Click, and Voila! Because finding the right service shouldn't be harder than searching for your lost TV remote.";

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default function SearchPage({ searchParams }: { searchParams: any }) {
  const query = searchParams.q.toLowerCase().split(" ");
  const services = [
    ...cleaningServices,
    ...handymanServices,
    ...homeImprovementServices,
    ...lawnAndGardenServices,
    ...maintenanceServices,
    ...techServices,
  ];

  const results = services
    .map((service) => ({
      service,
      count: query.reduce(
        (acc: any, term: string) =>
          acc + (service.tags.split(" ").includes(term) ? 1 : 0),
        0,
      ),
    }))
    .filter((result) => result.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

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
              <SubServiceCard key={i} service={service.service} />
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
