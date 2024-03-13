"use client";

import Lines from "./Lines";
import Link from "next/link";
import Mobile from "./Mobile";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import { auth } from "@/utils/firebase";
import type { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { onAuthStateChanged } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <div className="fixed top-0 z-10 w-full border-b-2 border-neutral-100 bg-white py-5 text-sm font-semibold">
      <div className="grid grid-cols-12 items-center">
        <div className="col-start-2 flex items-center gap-6">
          <div className="block md:hidden">
            <div
              className="flex flex-col justify-center"
              onClick={() => {
                setMobile((prev) => !prev);
                setIsOpen((prev) => !prev);
              }}
            >
              <Lines isOpen={isOpen} />
            </div>
          </div>
          <Link href="/" className="cursor-pointer rounded-md text-xl">
            HelpCenter
          </Link>
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform gap-[3.3vw] md:flex">
          <NavItem title="About Us" href="/about-us" />
          <NavItem title="Services" href="/services" />
          <NavItem title="Sell your services" href="/sell-services" />
        </div>

        {user ? (
          <div
            className="absolute right-[8vw] flex h-[100px] w-52 items-center justify-end"
            onMouseLeave={() => setDropdown(false)}
          >
            <button
              className="flex gap-1 rounded-full border-[1px] border-gray px-3 py-2"
              onMouseEnter={() => setDropdown(true)}
            >
              <AiOutlineUser size={18} />
              You
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn absolute right-[8vw] bg-primary hover:bg-primaryDark"
          >
            Login
          </Link>
        )}

        <AnimatePresence>
          {dropdown && (
            <motion.div
              initial={{ y: "10px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ y: "10px", opacity: 0 }}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              onClick={() => setDropdown(false)}
              className="absolute right-[8vw] top-[75px] w-52 rounded-xl bg-white p-3 shadow-lg"
            >
              <Dropdown />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>{mobile && <Mobile />}</AnimatePresence>
    </div>
  );
}
