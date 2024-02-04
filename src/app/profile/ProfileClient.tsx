"use client";

import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useState, useEffect } from "react";
import InfoSection from "./info/InfoSection";
import { User, onAuthStateChanged } from "firebase/auth";
import AddressSection from "./address/AddressSection";
import ProfileSkeleton from "@/components/profile/ProfileSkeleton";

export default function ProfileClient() {
  const [user, setUser] = useState<User | null>();
  const [userDetails, setUserDetails] = useState<any>();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchData(user);
      }
    });
  }, []);

  async function fetchData(user: any) {
    try {
      const [userRes, addressesRes] = await Promise.all([
        fetch(`/api/user/${user?.uid}`).then((res) => res.json()),
        fetch(`/api/address/addresses/${user?.uid}`).then((res) => res.json()),
      ]);
      setUserDetails(userRes), setAddresses(addressesRes);
    } catch {
      toast.error("Soemthing went wrong");
    }
  }

  return (
    <>
      {userDetails ? (
        <div className="w-12/12 mx-auto md:w-8/12 lg:w-7/12">
          <InfoSection
            name={userDetails.name}
            email={userDetails.email}
            onUpdate={() => fetchData(user)}
          />
          <AddressSection
            addresses={addresses}
            onUpdate={() => fetchData(user)}
          />
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </>
  );
}
