interface Props {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
  isSelected: Boolean;
}

export default function ProfileItem({
  label,
  icon,
  onClick,
  isSelected,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "bg-slate-100 font-semibold text-darkGray" : ""
      } flex w-56 cursor-pointer items-center gap-3 rounded-full py-3 pl-5 duration-200 hover:text-darkGray`}
    >
      {icon}
      {label}
    </div>
  );
}
