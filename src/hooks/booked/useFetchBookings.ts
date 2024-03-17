import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function useFetchBookings() {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) fetchBookings();
    });
  }, []);

  async function fetchBookings() {
    try {
      const res = await fetch(`/api/bookings/${auth.currentUser?.uid}`).then(
        (res) => res.json(),
      );
      setBookings(res.reverse());
    } catch (err: any) {
      toast.error(err.message);
    }
    setLoading(false);
  }

  return { loading, bookings };
}
