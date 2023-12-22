export default function NavItem({ title }: { title: string }) {
  return (
    <button className="text-center text-gray duration-200 hover:text-darkGray">
      {title}
    </button>
  );
}
