import Rating from "./Rating";
import Image from "next/image";

export default function SubServiceCard({ service }: { service: any }) {
  return (
    <div className="rounded-3xl border-[1px] border-lightGray">
      <Image
        className="rounded-t-3xl"
        src={service.image}
        quality={service.quality}
        alt={service.title}
        sizes="100vw"
        priority={true}
        placeholder="blur"
      />
      <div className="p-7">
        <p className="text-xl font-semibold text-darkGray">{service.title}</p>
        <Rating rating={service.rating} ratingCount={service.ratingCount} />
        <p className="mb-7 border-b-[1px] border-dashed border-gray pb-5 text-sm font-semibold">
          {service.price}
        </p>

        {service.services.map((point: any, i: any) => (
          <li key={i} className="mb-3 text-xs font-medium text-gray">
            {point}
          </li>
        ))}

        <div className="mt-7 flex">
          <button className="w-full rounded-md px-6 py-3 text-sm font-semibold duration-200">
            View Details
          </button>
          <button className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold duration-200 hover:bg-primaryDark">
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
}
