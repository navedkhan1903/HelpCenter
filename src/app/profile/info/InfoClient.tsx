"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import NameModal from "./NameModal";
import PassModal from "./PassModal";
import Modal from "@/components/Modal";
import { auth } from "@/utils/firebase";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineEdit } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import CTABtn from "@/components/profile/CTABtn";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
} from "firebase/auth";

interface Props {
  name: string;
  onUpdate: () => void;
}

export default function InfoClient({ name, onUpdate }: Props) {
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newName, setNewName] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  async function handleSave() {
    if (newName.length === 0) return toast.error("Full name is required");
    try {
      setSaving(true);
      await axios.post("/api/editName", {
        name: newName,
        uid: auth.currentUser!.uid,
      });
      onUpdate();
      handleModal("name", "close");
      toast.success("Name changed successfully");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handleReset() {
    if (oldPass.length === 0) return toast.error("Old Password is required");
    if (newPass.length < 6)
      return toast.error("Password must be atleast 6 characters long");
    try {
      setSaving(true);
      const user = auth.currentUser!;
      await reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(user.email!, oldPass),
      );
      await updatePassword(user, newPass);
      handleModal("pass", "close");
      toast.success("Password Reset Successful");
      await signOut(auth);
    } catch {
      toast.error("Incorrect Password");
    } finally {
      setSaving(false);
    }
  }

  function handleModal(type: string, action: string) {
    const setModalState =
      type === "name" ? setIsNameModalOpen : setIsPassModalOpen;
    setModalState(action === "open");
    document.body.style.overflow = action === "open" ? "hidden" : "auto";
  }

  return (
    <>
      <CTABtn
        label="Edit Name"
        icon={<MdOutlineEdit size={18} />}
        onClick={() => handleModal("name", "open")}
      />
      <CTABtn
        label="Reset Password"
        icon={<GrPowerReset size={18} />}
        onClick={() => handleModal("pass", "open")}
      />
      <AnimatePresence>
        {isNameModalOpen && (
          <Modal
            onClose={() => handleModal("name", "close")}
            label="Edit Name"
            loading={saving}
            action={handleSave}
            btnLabel="Save"
            bottomTxt="Your name is visible to Service Providers upon booking a service."
          >
            <NameModal
              name={name}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Modal>
        )}
        {isPassModalOpen && (
          <Modal
            onClose={() => handleModal("pass", "close")}
            label="Reset Password"
            loading={saving}
            action={handleReset}
            btnLabel="Reset"
            bottomTxt="You'll get logged out after resetting the password."
          >
            <PassModal
              onOldChange={(e) => setOldPass(e.target.value)}
              onNewChange={(e) => setNewPass(e.target.value)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
