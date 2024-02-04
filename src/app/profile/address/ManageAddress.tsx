"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "@/components/Modal";
import DeleteModal from "./DeleteModal";
import { FiTrash } from "react-icons/fi";
import AddressModal from "./AddressModal";
import { MdOutlineEdit } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import { useAddress } from "@/hooks/useAddress";

interface Props {
  address: any;
  onUpdate: () => void;
}

export default function ManageAddress({ address, onUpdate }: Props) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const {
    loading,
    saving,
    values,
    state,
    setValues,
    setSaving,
    setState,
    handleSave,
  } = useAddress(
    {
      phone: address.phone,
      altPhone: address.altPhone,
      pincode: address.pincode,
      locality: address.locality,
      address: address.address,
      city: address.city,
    },
    address.state,
  );

  async function handleEdit() {
    const res = await handleSave("/api/address/editAddress", address.id);
    if (res) {
      onUpdate();
      handleModal("edit", "close");
    }
  }

  async function handleDelete() {
    setSaving(true);
    try {
      await fetch(`/api/address/deleteAddress/${address.id}`);
      onUpdate();
      handleModal("delete", "close");
      toast.success("Address successfully deleted");
    } catch (err: any) {
      console.log(err);
      toast.error("Something went wrong");
    }
    setSaving(false);
  }

  function handleModal(type: string, action: string) {
    const setModalState = type === "edit" ? setEditModal : setDeleteModal;
    setModalState(action === "open");
    document.body.style.overflow = action === "open" ? "hidden" : "auto";
  }

  return (
    <div className="flex h-min gap-3 text-gray">
      <div
        onClick={() => handleModal("edit", "open")}
        className="cursor-pointer duration-200 hover:text-darkGray"
      >
        <MdOutlineEdit size={18} />
      </div>
      <div
        onClick={() => handleModal("delete", "open")}
        className="cursor-pointer duration-200 hover:text-darkGray"
      >
        <FiTrash size={18} />
      </div>
      <AnimatePresence>
        {editModal && (
          <Modal
            onClose={() => handleModal("edit", "close")}
            label="Edit Address"
            loading={saving}
            action={handleEdit}
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
        {deleteModal && (
          <Modal
            onClose={() => handleModal("delete", "close")}
            label="Delete Address"
            loading={saving}
            action={handleDelete}
            btnLabel="Delete"
            bottomTxt="Are you sure you want to delete this address?"
          >
            <DeleteModal address={address} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
