"use client";

import { auth } from "@/utils/firebase";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import InfoSection from "./info/InfoSection";
import ProfileSkeleton from "./ProfileSkeleton";
import AddressSection from "./address/AddressSection";
import useFetchUser from "@/hooks/profile/useFetchUser";
import { User, onAuthStateChanged } from "firebase/auth";

export default function ProfileClient() {
  const [user, setUser] = useState<User | null>();
  const { userDetails, addresses, fetchData } = useFetchUser();

  const profileUpdated = useSelector(
    (state: any) => state.updateProfile.profileUpdated,
  );

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchData(user);
      }
    });
  }, []);

  useEffect(() => {
    (async () => await fetchData(user))();
  }, [profileUpdated, user]);

  return (
    <>
      {userDetails ? (
        <div className="w-12/12 mx-auto md:w-8/12 lg:w-7/12">
          <InfoSection name={userDetails.name} email={userDetails.email} />
          <AddressSection addresses={addresses} />
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </>
  );
}
