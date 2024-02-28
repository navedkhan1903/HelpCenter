export default function () {
  return [0, 1, 2, 3].map((i) => (
    <div key={i} className="h-[77.14px] animate-pulse bg-neutral-100" />
  ));
}
