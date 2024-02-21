"use client";

import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { FiTrash } from "react-icons/fi";
import AddressModal from "./AddressModal";
import { useDispatch } from "react-redux";
import Modal from "@/components/shared/Modal";
import { update } from "@/store/profileSlice";
import { MdOutlineEdit } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import useAddress from "@/hooks/profile/useAddress";
import useDeleteAddress from "@/hooks/profile/useDeleteAddress";

export default function ManageAddress({ address }: { address: any }) {
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

  const { deleting, handleDelete } = useDeleteAddress(address.id, handleModal);
  const dispatch = useDispatch();

  async function handleEdit() {
    const res = await handleSave("/api/address/editAddress", address.id);
    if (res) {
      dispatch(update());
      handleModal("edit", "close");
    }
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
            loading={deleting}
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
