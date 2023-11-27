interface Props {
  title: string;
  items: Array<string>;
}

export default function FooterItem({ title, items }: Props) {
  return (
    <div>
      <p className="mb-3 text-lg text-lightGray">{title}</p>
      <div className="flex flex-col gap-3 text-sm font-semibold text-[#828282]">
        <div>
          <span className="cursor-pointer duration-200 hover:text-lightGray">
            {items[0]}
          </span>
        </div>
        <div>
          <span className="cursor-pointer duration-200 hover:text-lightGray">
            {items[1]}
          </span>
        </div>
        <div>
          <span className="cursor-pointer duration-200 hover:text-lightGray">
            {items[2]}
          </span>
        </div>
      </div>
    </div>
  );
}
