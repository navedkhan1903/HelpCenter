interface Props {
  icon: JSX.Element;
  onClick: () => void;
  isSelected: Boolean;
}

export default function ProfileItem({ icon, onClick, isSelected }: Props) {
  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "bg-primaryLight font-semibold text-darkGray" : ""
      } flex cursor-pointer items-center gap-3 rounded-full px-3 py-3 duration-200 hover:text-darkGray`}
    >
      {icon}
    </div>
  );
}
