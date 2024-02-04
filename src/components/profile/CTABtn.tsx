interface Props {
  label: string;
  icon: JSX.Element;
  onClick?: () => void;
}

export default function CTABtn({ label, icon, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="btn w-full gap-2 border-[1px] border-dashed border-gray bg-neutral-50 hover:bg-neutral-100"
    >
      {icon}
      {label}
    </button>
  );
}
