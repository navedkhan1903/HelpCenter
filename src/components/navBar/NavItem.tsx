import Link from "next/link";

interface Props {
  title: string;
  href: string;
  locked: boolean;
}

export default function NavItem({ title, href, locked }: Props) {
  return (
    <Link
      href={href}
      className={`text-center text-gray duration-200 hover:text-darkGray ${
        locked && "locked"
      }`}
    >
      {title}
    </Link>
  );
}
