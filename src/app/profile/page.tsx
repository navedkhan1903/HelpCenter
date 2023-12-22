import Info from "./info/Info";
import { Suspense } from "react";
import Address from "./address/Address";
import Session from "@/components/Session";
import InfoSkeleton from "./info/InfoSkeleton";
import ProfileNav from "./navigation/ProfileNav";

export default async function Profile({
  searchParams,
}: {
  searchParams?: { edit?: string };
}) {
  return (
    <Session status="authenticated" path="/login">
      <div className="mx-auto w-7/12 translate-y-[77px] pb-10 lg:w-6/12 xl:w-5/12">
        <p className="my-10 text-3xl font-semibold text-darkGray">My Profile</p>
        <div className="flex min-h-[500px] rounded-3xl border-[1px] border-lightGray p-10 shadow-sm">
          <ProfileNav />
          {(Object.keys(searchParams!).length === 0 ||
            searchParams?.edit === "info") && (
            <Suspense fallback={<InfoSkeleton />}>
              <Info />
            </Suspense>
          )}
          {searchParams?.edit === "address" && <Address />}
        </div>
      </div>
    </Session>
  );
}
