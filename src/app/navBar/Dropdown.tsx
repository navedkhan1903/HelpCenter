import Link from "next/link";
import { signOut } from "next-auth/react";
import DropdownItem from "./DropdownItem";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import {
  AiOutlineUser,
  AiOutlineHistory,
  AiOutlineLogout,
} from "react-icons/ai";

export default function Dropdown() {
  return (
    <>
      <Link href="/profile">
        <DropdownItem icon={<AiOutlineUser size={18} />} label="My Profile" />
      </Link>
      <Link href="/active">
        <DropdownItem
          icon={<HiOutlineWrenchScrewdriver size={18} />}
          label="Active Services"
        />
      </Link>
      <Link href="/history">
        <DropdownItem
          icon={<AiOutlineHistory size={18} />}
          label="Service History"
        />
      </Link>
      <Link href="/saved">
        <DropdownItem icon={<BsBookmark size={18} />} label="Saved Services" />
      </Link>
      <div onClick={() => signOut()}>
        <DropdownItem icon={<AiOutlineLogout size={18} />} label="Sign out" />
      </div>
    </>
  );
}
