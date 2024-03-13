interface Props {
  onClick: () => void;
  icon: JSX.Element;
  label: string;
}

export default function SortBtn({ onClick, icon, label }: Props) {
  return (
    <button onClick={onClick} className="flex items-center gap-1">
      {label}
      {icon}
    </button>
  );
}
