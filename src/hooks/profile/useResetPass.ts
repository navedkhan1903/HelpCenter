import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
} from "firebase/auth";

export default function useResetPass(
  oldPass: string,
  newPass: string,
  handleModal: (name: string, action: string) => void,
) {
  const [passSaving, setPassSaving] = useState(false);

  async function handleReset() {
    if (oldPass.length === 0) return toast.error("Old Password is required");
    if (newPass.length < 6)
      return toast.error("Password must be atleast 6 characters long");
    setPassSaving(true);
    try {
      const user = auth.currentUser!;
      await reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(user.email!, oldPass),
      );
      await updatePassword(user, newPass);
      handleModal("pass", "close");
      toast.success("Password Reset Successful");
      await signOut(auth);
    } catch (err: any) {
      toast.error(err.message);
    }
    setPassSaving(false);
  }

  return { passSaving, handleReset };
}
