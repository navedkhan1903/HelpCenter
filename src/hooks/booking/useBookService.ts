import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";

export default function useBookService() {
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState(false);

  async function fetchBooking(id: string) {
    const res = await fetch(`/api/booking/${id}`).then((res) => res.json());
    if (res.status != "In Progress") await fetchBooking(res.id);
    return;
  }

  async function handleBook(
    service: String,
    date: Date,
    slot: String,
    address: Object,
  ) {
    try {
      const res = await axios.post("/api/book", {
        uid: auth.currentUser!.uid,
        service,
        date,
        slot,
        address,
      });
      await fetchBooking(res.data.id);
      setBooked(true);
    } catch (err: any) {
      toast.error(err.message);
      setError(true);
    }
  }

  return { handleBook, booked, error };
}
