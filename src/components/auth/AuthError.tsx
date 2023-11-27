import { BiError } from "react-icons/bi";

export default function AuthError({ message }: { message: string }) {
  return (
    <div className="mb-3 flex items-center rounded-md border-[1px] border-red-700 bg-red-50 px-5 py-3 text-sm font-medium text-red-700">
      <BiError size={18} color="#b91c1c" />
      <p className="ml-3">{message}</p>
    </div>
  );
}
