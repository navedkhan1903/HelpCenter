"use client";

import ProfileItem from "./ProfileItem";
import { profileNav } from "@/utils/data";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function ProfileNav() {
  const path = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(useSearchParams());

  function handleParams(label: string) {
    params.set("edit", label);
    replace(`${path}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-3 border-r-[1px] border-r-lightGray pr-10 text-sm font-medium text-gray">
      {profileNav.map((item, i) => (
        <ProfileItem
          key={i}
          icon={item.icon}
          onClick={() => handleParams(item.url)}
          isSelected={
            !params.get("edit") && i == 0
              ? true
              : params.get("edit") === item.url
          }
        />
      ))}
    </div>
  );
}
