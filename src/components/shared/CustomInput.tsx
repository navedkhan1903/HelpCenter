import { ReactNode } from "react";
import { CgSpinner } from "react-icons/cg";

interface Props {
  icon: ReactNode;
  placeholder: string;
  label: string;
  loading: Boolean;
  onClick?: () => void;
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  icon,
  placeholder,
  label,
  loading,
  onClick,
  onChange,
  onKeyDown,
}: Props) {
  return (
    <div className="flex w-max items-center rounded-xl border-2 border-neutral-100 bg-white px-1 pl-5 shadow-sm">
      {icon}
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="mx-3 w-[30vw] py-4 text-sm font-medium placeholder-gray focus:outline-none lg:w-[15vw]"
      />
      {loading ? (
        <button className="btn w-[119.6px] bg-primary">
          <CgSpinner size={20} className="animate-spin" />
        </button>
      ) : (
        <button
          onClick={onClick}
          className="btn bg-primary hover:bg-primaryDark"
        >
          {label}
        </button>
      )}
    </div>
  );
}
