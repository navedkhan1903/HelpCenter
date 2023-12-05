"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Props {
  children: JSX.Element;
  status: string;
  path: string;
}

export default function Session({ children, status, path }: Props) {
  const session = useSession();
  const [sess, setSess] = useState("");

  useEffect(() => {
    setSess(session.status);
    if (session.status != "loading" && session.status != status) redirect(path);
  }, [session]);

  return <>{sess && sess === status && children}</>;
}
