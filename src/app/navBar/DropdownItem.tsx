interface Props {
  icon: JSX.Element;
  label: string;
}

export default function DropdownItem({ icon, label }: Props) {
  return (
    <div className="flex cursor-pointer gap-3 rounded-lg p-3 text-sm font-medium text-darkGray duration-200 hover:bg-primaryLight hover:font-semibold">
      {icon}
      {label}
    </div>
  );
}
