import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AuthSuccess({ message }: { message: string }) {
  return (
    <div className="mb-3 flex items-center rounded-md border-[1px] border-green-700 bg-green-50 px-5 py-3 text-sm font-medium text-green-700">
      <AiOutlineCheckCircle size={18} color="#15803d" />
      <p className="ml-3">{message}</p>
    </div>
  );
}
