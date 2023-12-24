import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Suspense } from "react";

interface Props {
  image: StaticImageData;
  title: string;
  desc: string;
  quality: number;
  ratingCount: string;
  rating: number;
  href: string;
}

export default function ServiceCard({
  image,
  title,
  desc,
  quality,
  ratingCount,
  rating,
  href,
}: Props) {
  return (
    <Link href={href}>
      <div className="mb-10 flex-1 duration-200 hover:scale-105 hover:cursor-pointer">
        <Image
          className="rounded-t-3xl"
          src={image}
          width={400}
          height={400}
          alt={title}
          sizes="100vw"
          quality={quality}
          priority={true}
          placeholder="blur"
        />
        <p className="mt-3 text-xl font-semibold text-darkGray">{title}</p>
        <p className="text-sm font-medium text-gray">{desc}</p>
        <div className="mt-1 flex h-max w-max items-center rounded-full bg-primaryLight px-2 py-1 text-xs font-medium">
          {[...Array(rating)].map((_, i) => (
            <AiFillStar color="#FFD369" size={15} key={`startFilled-${i}`} />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <AiOutlineStar color="#FFD369" size={15} key={`starEmpty-${i}`} />
          ))}
          <span className="pl-1">| {ratingCount}</span>
        </div>
      </div>
    </Link>
  );
}
