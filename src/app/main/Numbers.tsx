import { numbers } from "@/utils/data";

export default function Numbers() {
  return (
    <div className="mb-40 grid grid-cols-6 gap-y-10 bg-primary py-10 font-semibold text-darkGray md:grid-cols-12">
      {numbers.map((number, i) => (
        <div
          key={i}
          className="col-span-3 border-darkGray text-center first:col-start-1 last:border-r-0 md:border-r-2 lg:col-span-2 lg:first:col-start-3"
        >
          <div>
            <div className="pb-3 text-4xl lg:text-5xl">
              {number.title}
              {number.extra}
            </div>
            {number.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
