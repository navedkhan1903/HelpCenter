import Info from "./info/Info";
import Address from "./address/Address";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import ProfileNav from "./navigation/ProfileNav";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Profile({
  searchParams,
}: {
  searchParams?: { edit?: string };
}) {
  if (!(await getServerSession(authOptions))) redirect("/login");

  return (
    <div className="mx-auto w-7/12 translate-y-[77px] pb-10">
      <p className="my-10 text-3xl font-semibold text-darkGray">My Profile</p>
      <div className="flex h-[500px] rounded-3xl border-[1px] border-lightGray p-10 shadow-sm">
        <ProfileNav />
        {(Object.keys(searchParams!).length === 0 ||
          searchParams?.edit === "info") && <Info />}
        {searchParams?.edit === "address" && <Address />}
      </div>
    </div>
  );
}
