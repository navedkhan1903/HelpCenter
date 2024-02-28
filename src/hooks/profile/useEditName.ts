import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { update } from "@/store/profileSlice";

export default function useEditName(
  newName: String,
  handleModal: (name: string, action: string) => void,
) {
  const [nameSaving, setNameSaving] = useState(false);
  const dispatch = useDispatch();

  async function handleSave() {
    if (newName.length === 0) return toast.error("Full name is required");
    setNameSaving(true);
    try {
      await axios.post("/api/editName", {
        name: newName,
        uid: auth.currentUser!.uid,
      });
      dispatch(update());
      handleModal("name", "close");
      toast.success("Name changed successfully");
    } catch (err: any) {
      toast.error(err.message);
    }
    setNameSaving(false);
  }

  return { nameSaving, handleSave };
}
