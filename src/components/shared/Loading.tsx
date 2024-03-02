import { CgSpinner } from "react-icons/cg";

export default function Loading({ height }: { height: String }) {
  return (
    <div className={`${height} flex w-full items-center justify-center`}>
      <CgSpinner size="50" className="animate-spin" />
    </div>
  );
}
