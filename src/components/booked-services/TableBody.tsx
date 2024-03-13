import { statusColors } from "@/utils/data";
import { formatDate, formatTime } from "@/utils/functions";

interface Props {
  filteredServices: [] | undefined;
}

export default function TableBody({ filteredServices }: Props) {
  return (
    <tbody>
      {filteredServices?.map((service: any, i: any) => (
        <tr key={i} className="even:bg-neutral-100">
          <td className="p-5">{service.id}</td>
          <td>{service.service}</td>
          <td>{formatDate(new Date(service.date))}</td>
          <td>{service.slot}</td>
          <td>{formatDate(new Date(service.time))}</td>
          <td>{formatTime(new Date(service.time))}</td>
          <td>
            <p
              className="w-fit rounded-full px-3 py-1"
              style={{
                color: statusColors[service.status].color,
                backgroundColor: statusColors[service.status].bg,
              }}
            >
              {service.status}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
