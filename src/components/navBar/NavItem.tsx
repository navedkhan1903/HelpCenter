import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function NavItem({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="text-center text-gray duration-200 hover:text-darkGray"
    >
      {title}
    </Link>
  );
}
