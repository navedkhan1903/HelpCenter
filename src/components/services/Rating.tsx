import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  rating: number;
  ratingCount: string;
}

export default function Rating({ rating, ratingCount }: Props) {
  return (
    <div className="my-2 flex h-max w-max items-center rounded-full bg-primaryLight px-2 py-1 text-xs font-medium">
      {Array(5)
        .fill(0)
        .map((_, i) =>
          i < rating ? (
            <AiFillStar key={i} color="#FFD369" size={15} />
          ) : (
            <AiOutlineStar key={i} color="#FFD369" size={15} />
          ),
        )}
      <span className="pl-1">| {ratingCount}</span>
    </div>
  );
}
