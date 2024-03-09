"use client";

import { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import useFilter from "@/hooks/booked/useFilter";
import DropDown from "@/components/shared/Dropdown";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import {
  servicesOptions,
  slotOptions,
  activeStatusOptions,
  statusColors,
} from "@/utils/data";

const servicesData = [
  {
    id: "001",
    title: "Appliance Cleaning",
    date: "2024-03-07",
    time: "10:00 AM",
    slot: "Morning",
    status: "Booked",
  },
  {
    id: "002",
    title: "Carpet Cleaning",
    date: "2024-03-08",
    time: "02:30 PM",
    slot: "Afternoon",
    status: "In Progress",
  },
  {
    id: "003",
    title: "House Cleaning",
    date: "2024-03-09",
    time: "09:00 AM",
    slot: "Evening",
    status: "Completed",
  },
  {
    id: "004",
    title: "Appliance Cleaning",
    date: "2024-03-10",
    time: "01:00 PM",
    slot: "Night",
    status: "Cancelled",
  },
];

export default function Profile() {
  const [date, setDate] = useState(0);
  const [bookedOn, setBookedOn] = useState(0);
  const [bookedAt, setBookedAt] = useState(0);

  const {
    service,
    slot,
    status,
    filteredServices,
    setService,
    setSlot,
    setStatus,
    handleReset,
  } = useFilter({ servicesData: servicesData });

  return (
    <Session status="authenticated" path="/login">
      <Wrapper
        title="Booked Services"
        subTitle="Your schedule's so full, it's like your appointments booked themselves! Check out your service spree!"
      >
        <>
          <div className="mb-5 flex items-center gap-10 rounded-md">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <IoFilter />
              Filter
            </div>
            <DropDown
              options={servicesOptions}
              onChange={setService}
              value={service}
              placeholder="Service"
            />
            <DropDown
              options={slotOptions}
              onChange={setSlot}
              value={slot}
              placeholder="Slot"
            />
            <DropDown
              options={activeStatusOptions}
              onChange={setStatus}
              value={status}
              placeholder="Status"
            />
            <button
              onClick={handleReset}
              className="rounded-md bg-red-100 p-4 text-sm duration-200 hover:bg-red-200"
            >
              <GrPowerReset />
            </button>
          </div>
          <div className="w-full overflow-auto">
            <table className="w-full min-w-[800px] text-left text-sm font-medium">
              <thead>
                <tr className="bg-lightGray">
                  <th className="rounded-tl-md p-5">Order ID</th>
                  <th>Service</th>
                  <th>
                    <button
                      onClick={() => {
                        setDate((curr) => (curr + 1) % 3);
                        setBookedOn(0);
                        setBookedAt(0);
                      }}
                      className="flex items-center gap-1"
                    >
                      Date
                      {date === 0 ? (
                        <FaSort color="#767676" />
                      ) : date === 1 ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )}
                    </button>
                  </th>
                  <th>Slot</th>
                  <th>
                    <button
                      onClick={() => {
                        setBookedOn((curr) => (curr + 1) % 3);
                        setDate(0);
                        setBookedAt(0);
                      }}
                      className="flex items-center gap-1"
                    >
                      Booked On
                      {bookedOn === 0 ? (
                        <FaSort color="#767676" />
                      ) : bookedOn === 1 ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )}
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        setBookedAt((curr) => (curr + 1) % 3);
                        setDate(0);
                        setBookedOn(0);
                      }}
                      className="flex items-center gap-1"
                    >
                      Booked At
                      {bookedAt === 0 ? (
                        <FaSort color="#767676" />
                      ) : bookedAt === 1 ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )}
                    </button>
                  </th>
                  <th className="rounded-tr-md">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service: any, i: any) => (
                  <tr key={i} className="even:bg-neutral-100">
                    <td className="p-5">{service.id}</td>
                    <td>{service.title}</td>
                    <td>{service.date}</td>
                    <td>{service.slot}</td>
                    <td>{service.date}</td>
                    <td>{service.time}</td>
                    <td>
                      <p
                        className={`${
                          statusColors[service.status]
                        } w-fit rounded-full px-3 py-1`}
                      >
                        {service.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </Wrapper>
    </Session>
  );
}
