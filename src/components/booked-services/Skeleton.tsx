export default function Skeleton() {
  return (
    <tbody>
      {[0, 1, 2, 3, 4].map((i) => (
        <tr key={i} className="animate-pulse even:bg-neutral-100">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <td key={i} className="h-[60px]"></td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
