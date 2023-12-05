import Info from "./info/Info";
import { Suspense } from "react";
import Address from "./address/Address";
import Session from "@/components/Session";
import ProfileNav from "./navigation/ProfileNav";

export default async function Profile({
  searchParams,
}: {
  searchParams?: { edit?: string };
}) {
  return (
    <Session status="authenticated" path="/login">
      <div className="mx-auto w-8/12 translate-y-[77px] pb-10">
        <p className="my-10 text-3xl font-semibold text-darkGray">My Profile</p>
        <div className="flex min-h-[500px] rounded-3xl border-[1px] border-lightGray p-10 shadow-sm">
          <ProfileNav />
          <Suspense fallback={<p>Loading...</p>}>
            {(Object.keys(searchParams!).length === 0 ||
              searchParams?.edit === "info") && <Info />}
            {searchParams?.edit === "address" && <Address />}
          </Suspense>
        </div>
      </div>
    </Session>
  );
}
