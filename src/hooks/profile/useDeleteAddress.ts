import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { update } from "@/store/profileSlice";

export default function useDeleteAddress(
  id: string,
  handleModal: (name: string, action: string) => void,
) {
  const [deleting, setDeleting] = useState(false);
  const dispatch = useDispatch();

  async function handleDelete() {
    setDeleting(true);
    try {
      await fetch(`/api/address/deleteAddress/${id}`);
      dispatch(update());
      handleModal("delete", "close");
      toast.success("Address successfully deleted");
    } catch (err: any) {
      toast.error(err.message);
    }
    setDeleting(false);
  }

  return { deleting, handleDelete };
}
