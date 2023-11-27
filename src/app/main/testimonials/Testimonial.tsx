import { FaQuoteLeft } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  comment: string;
  image: StaticImageData;
  name: string;
  rating: number;
}

export default function Testimonial({ comment, image, name, rating }: Props) {
  return (
    <div className="rounded-xl py-8 shadow-sm">
      <div className="px-8">
        <FaQuoteLeft size={50} color="#FFD369" />
      </div>
      <p className="mb-8 border-b-2 border-neutral-100 px-8 py-8 text-sm font-semibold leading-6 text-gray">
        {comment}
      </p>
      <div className="mx-8 flex items-center gap-4">
        <div className="overflow-hidden rounded-full">
          <Image
            src={image}
            width={50}
            height={50}
            alt="User Image"
            quality={100}
          />
        </div>
        <div className="text-lg font-semibold text-darkGray">
          {name}
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <AiFillStar color="#FFD369" size={15} key={`startFilled-${i}`} />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <AiOutlineStar color="#FFD369" size={15} key={`starEmpty-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
