"use client";

import { useState } from "react";
import { sortIcon } from "@/utils/data";
import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import useFilter from "@/hooks/booked/useFilter";
import Filter from "@/components/booked-services/Filter";
import SortBtn from "@/components/booked-services/SortBtn";
import Skeleton from "@/components/booked-services/Skeleton";
import TableBody from "@/components/booked-services/TableBody";
import useFetchBookings from "@/hooks/booked/useFetchBookings";

export default function Profile() {
  const [date, setDate] = useState(0);
  const [bookedOn, setBookedOn] = useState(0);
  const [bookedAt, setBookedAt] = useState(0);

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

  function sort(setter: any) {
    if (setter != setDate) setDate(0);
    if (setter != setBookedOn) setBookedOn(0);
    if (setter != setBookedAt) setBookedAt(0);
    setter((curr: number) => (curr + 1) % 3);
  }

  return (
    <Session status="authenticated" path="/login">
      <Wrapper
        title="Booked Services"
        subTitle="Your schedule's so full, it's like your appointments booked themselves! Check out your service spree!"
      >
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
                  <th>
                    <SortBtn
                      onClick={() => sort(setDate)}
                      icon={sortIcon[date]}
                      label="DATE"
                    />
                  </th>
                  <th>SLOT</th>
                  <th>
                    <SortBtn
                      onClick={() => sort(setBookedOn)}
                      icon={sortIcon[bookedOn]}
                      label="BOOKED ON"
                    />
                  </th>
                  <th>
                    <SortBtn
                      onClick={() => sort(setBookedAt)}
                      icon={sortIcon[bookedAt]}
                      label="BOOKED AT"
                    />
                  </th>
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
      </Wrapper>
    </Session>
  );
}
