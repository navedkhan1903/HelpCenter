import { ReactNode } from "react";

interface Props {
  isSelected: boolean;
  icon: ReactNode;
  type: string;
  placeholder: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isVisible?: ReactNode;
  onToggleVisibility?: () => void;
}

export default function AuthInput({
  isSelected,
  icon,
  type,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  onKeyDown,
  isVisible,
  onToggleVisibility,
}: Props) {
  return (
    <div
      className={`${
        isSelected ? "border-gray" : "border-neutral-100"
      } mb-3 flex items-center rounded-md border-2 px-5 duration-200`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="mx-3 w-56 py-3 text-sm font-medium text-darkGray placeholder-gray focus:outline-none"
      />
      {isVisible ? (
        <div className="cursor-pointer" onClick={onToggleVisibility}>
          {isVisible}
        </div>
      ) : null}
    </div>
  );
}
