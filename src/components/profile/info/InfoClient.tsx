"use client";

import CTABtn from "../CTABtn";
import { useState } from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/shared/Modal";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineEdit } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/shared/Loading";
import useEditName from "@/hooks/profile/useEditName";
import useResetPass from "@/hooks/profile/useResetPass";
const DynamicNameModal = dynamic(() => import("./NameModal"), {
  loading: () => <Loading height={"h-[309.43px]"} />,
});
const DynamicPassModal = dynamic(() => import("./PassModal"), {
  loading: () => <Loading height={"h-[362.86px]"} />,
});

export default function InfoClient({ name }: { name: string }) {
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const { nameSaving, handleSave } = useEditName(newName, handleModal);
  const { passSaving, handleReset } = useResetPass(
    oldPass,
    newPass,
    handleModal,
  );

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
        icon={<MdOutlineEdit />}
        onClick={() => handleModal("name", "open")}
      />
      <CTABtn
        label="Reset Password"
        icon={<GrPowerReset />}
        onClick={() => handleModal("pass", "open")}
      />
      <AnimatePresence>
        {isNameModalOpen && (
          <Modal
            onClose={() => handleModal("name", "close")}
            label="Edit Name"
            loading={nameSaving}
            action={handleSave}
            btnLabel="Save"
            bottomTxt="Your name is visible to Service Providers upon booking a service."
          >
            <DynamicNameModal
              name={name}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Modal>
        )}
        {isPassModalOpen && (
          <Modal
            onClose={() => handleModal("pass", "close")}
            label="Reset Password"
            loading={passSaving}
            action={handleReset}
            btnLabel="Reset"
            bottomTxt="You'll get logged out after resetting the password."
          >
            <DynamicPassModal
              onOldChange={(e) => setOldPass(e.target.value)}
              onNewChange={(e) => setNewPass(e.target.value)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
