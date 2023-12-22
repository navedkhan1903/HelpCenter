"use client";

import { auth } from "@/utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

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
