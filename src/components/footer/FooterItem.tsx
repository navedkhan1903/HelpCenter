interface Props {
  title: string;
  items: Array<string>;
}

export default function FooterItem({ title, items }: Props) {
  return (
    <div>
      <p className="mb-3 text-lg text-lightGray">{title}</p>
      <div className="flex flex-col gap-3 text-sm font-semibold text-[#828282]">
        {items.map((item, i) => (
          <div>
            <button
              key={i}
              className="text-left duration-200 hover:text-lightGray"
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
