"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginSession({ children }: { children: JSX.Element }) {
  const session = useSession();
  if (session.status === "unauthenticated") return children;
  redirect("/");
}
