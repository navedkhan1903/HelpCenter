import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="flex h-[335px] items-center">
      <CgSpinner size="50" className="animate-spin" />
    </div>
  );
}
