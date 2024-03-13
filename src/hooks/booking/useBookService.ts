import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";

export default function useBookService() {
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState(false);

  function handleBook(
    service: String,
    date: Date,
    slot: String,
    address: Object,
  ) {
    setTimeout(async () => {
      try {
        await axios.post("/api/book", {
          uid: auth.currentUser!.uid,
          service,
          date,
          slot,
          address,
        });
        setBooked(true);
      } catch (err: any) {
        toast.error(err.message);
        setError(true);
      }
    }, Math.random() * 10000);
  }

  return { handleBook, booked, error };
}
