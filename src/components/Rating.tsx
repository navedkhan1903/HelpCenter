import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  rating: number;
  ratingCount: string;
}

export default function Rating({ rating, ratingCount }: Props) {
  return (
    <div className="my-2 flex h-max w-max items-center rounded-full bg-primaryLight px-2 py-1 text-xs font-medium">
      {[...Array(rating)].map((_, i) => (
        <AiFillStar color="#FFD369" size={15} key={`startFilled-${i}`} />
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <AiOutlineStar color="#FFD369" size={15} key={`starEmpty-${i}`} />
      ))}
      <span className="pl-1">| {ratingCount}</span>
    </div>
  );
}
