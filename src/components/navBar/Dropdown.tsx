import Link from "next/link";
import { navbarDropdown } from "@/utils/data";

export default function Dropdown() {
  return (
    <>
      {navbarDropdown.map((item, i) => (
        <Link
          key={i}
          onClick={item.onClick}
          href={item.href}
          className={`flex w-full gap-3 rounded-lg p-3 text-sm font-medium duration-200 hover:bg-primaryLight hover:font-semibold ${
            item.locked && "locked"
          }`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </>
  );
}
