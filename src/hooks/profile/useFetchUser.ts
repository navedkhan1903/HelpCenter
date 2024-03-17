import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function useFetchUser() {
  const [userDetails, setUserDetails] = useState<any>();
  const [addresses, setAddresses] = useState([]);

  const profileUpdated = useSelector(
    (state: any) => state.updateProfile.profileUpdated,
  );

  useEffect(() => {
    (async () => await fetchData())();
  }, [profileUpdated]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) await fetchData();
    });
  }, []);

  async function fetchData() {
    try {
      const [userRes, addressesRes] = await Promise.all([
        fetch(`/api/user/${auth.currentUser?.uid}`).then((res) => res.json()),
        fetch(`/api/address/addresses/${auth.currentUser?.uid}`).then((res) =>
          res.json(),
        ),
      ]);
      setUserDetails(userRes), setAddresses(addressesRes);
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return { userDetails, addresses };
}
