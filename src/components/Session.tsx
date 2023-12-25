"use client";

import { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

interface Props {
  children: JSX.Element;
  status: string;
  path: string;
}

export default function Session({ children, status, path }: Props) {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && status === "unauthenticated") router.replace(path);
      else if (!user && status === "authenticated") router.replace(path);
    });
  }, []);

  return <>{children}</>;
}
