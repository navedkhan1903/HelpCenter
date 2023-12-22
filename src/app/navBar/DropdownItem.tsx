interface Props {
  icon: JSX.Element;
  label: string;
}

export default function DropdownItem({ icon, label }: Props) {
  return (
    <button className="flex w-full gap-3 rounded-lg p-3 text-sm font-medium text-darkGray duration-200 hover:bg-primaryLight hover:font-semibold">
      {icon}
      {label}
    </button>
  );
}
