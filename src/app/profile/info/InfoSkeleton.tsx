export default function InfoSkeleton() {
  return (
    <div className="animate-pulse">
      {Array.from({ length: 2 }, (_, index) => (
        <div key={index}>
          <p className="mb-1 mt-10 h-[20px] w-20 rounded-md bg-neutral-100">
            {" "}
          </p>
          <div className="h-[47.43px] w-72 rounded-md bg-neutral-100"></div>
        </div>
      ))}
    </div>
  );
}
