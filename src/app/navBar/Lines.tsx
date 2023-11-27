export default function Lines({ isOpen }: { isOpen: Boolean }) {
  return (
    <>
      <div
        className={`my-[1.5px] h-[2.5px] w-4 rounded-full bg-darkGray duration-200 ${
          isOpen ? "translate-y-[5.5px] rotate-45" : ""
        }`}
      />
      <div
        className={`my-[1.5px] h-[2.5px] w-4 rounded-full bg-darkGray duration-200 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`my-[1.5px] h-[2.5px] w-4 rounded-full bg-darkGray duration-200 ${
          isOpen ? "-translate-y-[5.5px] -rotate-45" : ""
        }`}
      />
    </>
  );
}
