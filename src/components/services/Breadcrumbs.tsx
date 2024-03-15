import Link from "next/link";
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Breadcrumbs({ items }: { items: any[] }) {
  return (
    <div className="mb-5 flex items-center text-sm text-gray">
      <Link
        href={"/"}
        className="rounded-md px-2 py-1 duration-200 hover:bg-neutral-100"
      >
        <GoHome size="18" />
      </Link>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center font-medium last:font-semibold last:text-darkGray"
        >
          <MdKeyboardArrowRight size="20" />
          <Link
            href={item.href}
            className="rounded-md px-2 py-1 duration-200 hover:bg-neutral-100"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
