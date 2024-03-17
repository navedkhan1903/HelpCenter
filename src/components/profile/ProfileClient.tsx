"use client";

import InfoSection from "./info/InfoSection";
import ProfileSkeleton from "./ProfileSkeleton";
import AddressSection from "./address/AddressSection";
import useFetchUser from "@/hooks/profile/useFetchUser";

export default function ProfileClient() {
  const { userDetails, addresses } = useFetchUser();

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
