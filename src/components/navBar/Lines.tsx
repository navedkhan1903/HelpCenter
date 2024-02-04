export default function Lines({ isOpen }: { isOpen: Boolean }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`my-[1.5px] h-[2.5px] w-4 rounded-full bg-darkGray duration-200 ${
            isOpen
              ? i === 0
                ? "translate-y-[5.5px] rotate-45"
                : i === 1
                ? "opacity-0"
                : "-translate-y-[5.5px] -rotate-45"
              : ""
          }`}
        />
      ))}
    </>
  );
}
