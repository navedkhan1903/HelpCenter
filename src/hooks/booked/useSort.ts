import { useState } from "react";

export default function useSort() {
  const [date, setDate] = useState(0);
  const [bookedOn, setBookedOn] = useState(0);
  const [bookedAt, setBookedAt] = useState(0);

  return { date, bookedOn, bookedAt, setDate, setBookedOn, setBookedAt };
}
