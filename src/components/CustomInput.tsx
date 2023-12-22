import { ReactNode } from "react";
import { CgSpinner } from "react-icons/cg";

interface Props {
  icon: ReactNode;
  placeholder: string;
  label: string;
  loading: Boolean;
  onClick: () => void;
}

export default function CustomInput({
  icon,
  placeholder,
  label,
  loading,
  onClick,
}: Props) {
  return (
    <div className="flex w-max items-center rounded-xl border-2 border-neutral-100 bg-white px-1 pl-5 text-darkGray shadow-sm">
      {icon}
      <input
        placeholder={placeholder}
        className="mx-3 w-[30vw] py-4 text-sm font-medium placeholder-gray focus:outline-none lg:w-[15vw]"
      />
      {loading ? (
        <button className="flex w-[119.6px] justify-center rounded-md bg-primary px-6 py-3">
          <div className="animate-spin">
            <CgSpinner size={20} />
          </div>
        </button>
      ) : (
        <button
          onClick={onClick}
          className="rounded-md bg-primary px-6 py-3 text-sm font-semibold duration-200 hover:bg-primaryDark"
        >
          {label}
        </button>
      )}
    </div>
  );
}
