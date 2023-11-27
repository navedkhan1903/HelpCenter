"use client";

import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: JSX.Element }) {
  return <SessionProvider>{children}</SessionProvider>;
}
