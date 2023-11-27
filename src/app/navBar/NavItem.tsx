export default function NavItem({ title }: { title: string }) {
  return (
    <p className="cursor-pointer text-center text-gray duration-200 hover:text-darkGray">
      {title}
    </p>
  );
}
