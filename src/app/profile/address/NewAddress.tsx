"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { auth } from "@/utils/firebase";
import { FaPlus } from "react-icons/fa6";
import AddressModal from "./AddressModal";
import { AnimatePresence } from "framer-motion";
import { useAddress } from "@/hooks/useAddress";
import CTABtn from "@/components/profile/CTABtn";

export default function NewAddress({ onUpdate }: { onUpdate: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, saving, values, state, setValues, setState, handleSave } =
    useAddress(
      {
        phone: "",
        altPhone: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
      },
      "",
    );

  function openModal() {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setValues({ ...values, city: "" });
    setState("");
  }

  async function handleSaveAddress() {
    const res = await handleSave(
      "/api/address/newAddress",
      auth.currentUser!.uid,
    );
    if (res) {
      onUpdate();
      closeModal();
    }
  }

  return (
    <>
      <CTABtn
        label="Add New Address"
        icon={<FaPlus size={18} />}
        onClick={openModal}
      />
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            label="Add New Address"
            loading={saving}
            action={handleSaveAddress}
            btnLabel="Save"
            bottomTxt="Your address is shared with Service Providers upon booking a service."
          >
            <AddressModal
              onPhoneChange={(e) =>
                setValues({ ...values, phone: e.target.value })
              }
              onAltPhoneChange={(e) =>
                setValues({ ...values, altPhone: e.target.value })
              }
              onPincodeChange={(e) =>
                setValues({ ...values, pincode: e.target.value })
              }
              onLocalityChange={(e) =>
                setValues({ ...values, locality: e.target.value })
              }
              onAddressChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
              onCityChange={(e) =>
                setValues({ ...values, city: e.target.value })
              }
              onStateChange={setState}
              values={values}
              state={state}
              loading={loading}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
