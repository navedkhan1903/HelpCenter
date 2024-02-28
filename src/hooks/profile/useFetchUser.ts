import { useState } from "react";
import toast from "react-hot-toast";

export default function useFetchUser() {
  const [userDetails, setUserDetails] = useState<any>();
  const [addresses, setAddresses] = useState([]);

  async function fetchData(user: any) {
    try {
      const [userRes, addressesRes] = await Promise.all([
        fetch(`/api/user/${user?.uid}`).then((res) => res.json()),
        fetch(`/api/address/addresses/${user?.uid}`).then((res) => res.json()),
      ]);
      setUserDetails(userRes), setAddresses(addressesRes);
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return { userDetails, addresses, fetchData };
}
