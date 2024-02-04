import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { validateAddress } from "@/utils/functions";

export function useAddress(initialValues: any, initialState: string) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    (async () => {
      if (values.pincode.length === 6) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.postalpincode.in/pincode/${values.pincode}`,
          ).then((res) => res.json());
          setValues({ ...values, city: res[0].PostOffice?.[0]?.District });
          setState(res[0].PostOffice?.[0]?.State || "");
        } catch (err: any) {
          console.log(err);
        }
        setLoading(false);
      } else {
        setValues({ ...values, city: "" });
        setState("");
      }
    })();
  }, [values.pincode]);

  async function handleSave(apiEndpoint: string, id: string) {
    try {
      if (validateAddress(values, state)) {
        setSaving(true);
        await axios.post(
          apiEndpoint,
          apiEndpoint === "/api/address/editAddress"
            ? { id, values, state }
            : { uid: id, values, state },
        );
        setSaving(false);
        toast.success("Address saved successfully");
        return true;
      }
    } catch {
      toast.error("Something went wrong.");
    }
  }

  return {
    loading,
    saving,
    values,
    state,
    setValues,
    setSaving,
    setState,
    handleSave,
  };
}
