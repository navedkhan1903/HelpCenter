import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  type: string;
  placeholder: string;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isVisible?: ReactNode;
  onToggleVisibility?: () => void;
}

export default function AuthInput({
  icon,
  type,
  placeholder,
  onChange,
  onKeyDown,
  isVisible,
  onToggleVisibility,
}: Props) {
  return (
    <div className="relative mb-3">
      <div className="absolute left-5 top-1/2 -translate-y-1/2">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full rounded-md border-2 border-neutral-100 px-12 py-3 text-sm font-medium placeholder-gray outline-none duration-200 focus:border-gray"
      />
      {isVisible ? (
        <div
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={onToggleVisibility}
        >
          {isVisible}
        </div>
      ) : null}
    </div>
  );
}
