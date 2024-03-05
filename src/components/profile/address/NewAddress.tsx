"use client";

import CTABtn from "../CTABtn";
import { useState } from "react";
import dynamic from "next/dynamic";
import { auth } from "@/utils/firebase";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { update } from "@/store/profileSlice";
import Modal from "@/components/shared/Modal";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/shared/Loading";
import useAddress from "@/hooks/profile/useAddress";
const DynamicAddressModal = dynamic(() => import("./AddressModal"), {
  loading: () => <Loading height={"h-[480px] md:h-[278px]"} />,
});

export default function NewAddress() {
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

  const dispatch = useDispatch();

  function openModal() {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setValues({
      phone: "",
      altPhone: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
    });
    setState("");
  }

  async function handleSaveAddress() {
    const res = await handleSave(
      "/api/address/newAddress",
      auth.currentUser!.uid,
    );
    if (res) {
      dispatch(update());
      closeModal();
    }
  }

  return (
    <>
      <CTABtn label="Add New Address" icon={<FaPlus />} onClick={openModal} />
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
            <DynamicAddressModal
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
