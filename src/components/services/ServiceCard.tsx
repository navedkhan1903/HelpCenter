import Link from "next/link";
import Rating from "./Rating";
import Image from "next/image";

export default function ServiceCard({ service }: { service: any }) {
  return (
    <Link href={service.href}>
      <div
        className={`mb-10 flex-1 duration-200 hover:scale-105 ${
          service.locked ? "locked" : "hover:cursor-pointer"
        }`}
      >
        <Image
          className="rounded-t-3xl"
          src={service.image}
          width={400}
          alt={service.title}
          sizes="100vw"
          quality={service.quality}
          priority={true}
          placeholder="blur"
        />
        <p className="mt-3 text-xl font-semibold">{service.title}</p>
        <p className="text-sm font-medium text-gray">{service.desc}</p>
        <Rating rating={service.rating} ratingCount={service.ratingCount} />
      </div>
    </Link>
  );
}
