import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  placeholder: string;
  label: string;
}

export default function CustomInput({ icon, placeholder, label }: Props) {
  return (
    <div className="flex w-max items-center rounded-xl border-2 border-neutral-100 bg-white px-1 pl-5 text-darkGray shadow-sm">
      {icon}
      <input
        placeholder={placeholder}
        className="mx-3 w-[30vw] py-4 text-sm font-medium placeholder-gray focus:outline-none lg:w-[15vw]"
      />
      <p className="cursor-pointer rounded-md bg-primary px-6 py-3 text-sm font-semibold duration-200 hover:bg-primaryDark active:animate-primaryBtnAnimation">
        {label}
      </p>
    </div>
  );
}
