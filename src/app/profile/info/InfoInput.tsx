interface Props {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled: boolean;
  icon: JSX.Element;
}

export default function InfoInput({
  label,
  type,
  value,
  onChange,
  disabled,
  icon,
}: Props) {
  return (
    <div>
      <div className="mt-10 flex items-center gap-1 pb-1 text-sm font-medium text-darkGray">
        {icon}
        {label}
      </div>
      <input
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        className={`${
          disabled ? "cursor-not-allowed" : ""
        } w-full rounded-md border-2 border-lightGray px-3 py-3 text-sm font-medium text-darkGray outline-none duration-200 focus:border-gray`}
      />
    </div>
  );
}
