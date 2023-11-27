"use client";

import Lines from "./Lines";
import Link from "next/link";
import Mobile from "./Mobile";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { BiBell } from "react-icons/bi";
import NavItem from "@/app/navBar/NavItem";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();

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
          <Link
            href="/"
            className="cursor-pointer rounded-md text-xl text-darkGray"
          >
            HelpCenter
          </Link>
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform gap-[3.3vw] md:flex">
          <NavItem title="About Us" />
          <NavItem title="Services" />
          <NavItem title="Sell your services" />
        </div>

        {session.data && (
          <div className="absolute right-[8vw] flex items-center gap-3">
            <div className="cursor-pointer rounded-full p-3 text-gray duration-200 hover:bg-primaryLight hover:text-darkGray">
              <BiBell size={20} />
            </div>
            <div
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="my-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-semibold text-darkGray">
                {session.data.user?.name?.[0]}
              </div>
            </div>
          </div>
        )}

        {session.status === "unauthenticated" && (
          <Link
            href="/login"
            className="absolute right-[8vw] cursor-pointer rounded-md bg-primary px-6 py-3 text-center text-darkGray duration-200 hover:bg-primaryDark active:animate-primaryBtnAnimation"
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
              className="absolute right-[8vw] top-[69px] w-48 rounded-xl bg-white p-3 shadow-lg"
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
