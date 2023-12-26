"use client";

import { useState } from "react";
import CustomInput from "@/components/CustomInput";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(query: string) {
    const params = new URLSearchParams(searchParams);
    params.set("q", query);
    router.push(`/search?${params}`);
  }

  return (
    <CustomInput
      loading={false}
      onClick={() => handleSearch(query)}
      onChange={(event) => setQuery(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") handleSearch(query);
      }}
      icon={<HiMagnifyingGlass color="#767676" size="18" />}
      placeholder="Search Services"
      label="Find Service"
    />
  );
}
