import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function useFetchAddresses() {
  const [addLoading, setAddLoading] = useState(false);
  const [addresses, setAddresses] = useState<any[]>();

  const profileUpdated = useSelector(
    (state: any) => state.updateProfile.profileUpdated,
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [profileUpdated]);

  async function fetchData() {
    setAddLoading(true);
    try {
      setAddresses(
        await fetch(`/api/address/addresses/${auth.currentUser?.uid}`).then(
          (res) => res.json(),
        ),
      );
    } catch (err: any) {
      toast.error(err.message);
    }
    setAddLoading(false);
  }

  return { addLoading, addresses };
}
