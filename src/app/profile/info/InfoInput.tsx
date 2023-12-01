interface Props {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export default function InfoInput({
  label,
  type,
  value,
  onChange,
  disabled,
}: Props) {
  return (
    <div>
      <p className="mt-10 pb-1 text-sm font-medium text-darkGray">{label}</p>
      <input
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        className={`${
          disabled ? "cursor-not-allowed" : ""
        } w-[280px] rounded-md border-2 border-lightGray px-3 py-3 text-sm font-medium text-darkGray outline-none duration-200 focus:border-gray`}
      />
    </div>
  );
}
