"use client";

import axios from "axios";
import bcryptjs from "bcryptjs";
import Wrapper from "../Wrapper";
import InfoInput from "./InfoInput";
import { signIn } from "next-auth/react";
import InfoSkeleton from "./InfoSkeleton";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      _id: string;
      email: string;
      pass: string;
    };
  }
}

export default async function Info() {
  const res = await axios.get("https://dummyjson.com/products");

  return <p>Hello</p>;
}
