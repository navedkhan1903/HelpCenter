interface Props {
  placeholder: string;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function Input({ placeholder, onChange, value }: Props) {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-full rounded-md border-2 border-neutral-100 p-3 text-sm font-medium placeholder-gray outline-none duration-200 focus:border-gray"
    />
  );
}
