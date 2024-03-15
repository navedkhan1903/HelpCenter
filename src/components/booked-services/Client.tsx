"use client";

import useFilter from "@/hooks/booked/useFilter";
import Filter from "@/components/booked-services/Filter";
import Skeleton from "@/components/booked-services/Skeleton";
import TableBody from "@/components/booked-services/TableBody";
import useFetchBookings from "@/hooks/booked/useFetchBookings";

export default function Client() {
  const { loading, bookings } = useFetchBookings();

  const {
    service,
    slot,
    status,
    filteredServices,
    setService,
    setSlot,
    setStatus,
    handleReset,
  } = useFilter({ servicesData: bookings });

  return (
    <>
      <Filter
        {...{
          service,
          slot,
          status,
          setService,
          setSlot,
          setStatus,
          handleReset,
        }}
      />
      <div className="w-full overflow-auto">
        <table className="w-full min-w-[800px] text-left text-sm font-medium">
          <thead>
            <tr className="bg-lightGray">
              <th className="rounded-tl-md p-5">BOOK ID</th>
              <th>SERVICE</th>
              <th>DATE</th>
              <th>SLOT</th>
              <th>BOOKED ON</th>
              <th>BOOKED AT</th>
              <th className="rounded-tr-md">STATUS</th>
            </tr>
          </thead>
          {loading ? (
            <Skeleton />
          ) : (
            <TableBody filteredServices={filteredServices} />
          )}
        </table>
      </div>
    </>
  );
}
