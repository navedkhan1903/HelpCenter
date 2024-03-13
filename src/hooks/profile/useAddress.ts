import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { validateAddress } from "@/utils/functions";

export default function useAddress(initialValues: any, initialState: string) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<any>(initialState);

  useEffect(() => {
    (async () => {
      if (values.pincode.length === 6) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.postalpincode.in/pincode/${values.pincode}`,
          ).then((res) => res.json());
          setValues({
            ...values,
            city: res[0].PostOffice?.[0]?.District || values.city,
          });
          setState(res[0].PostOffice?.[0]?.State || state);
        } catch (err: any) {
          toast.error(err.message);
        }
        setLoading(false);
      }
    })();
  }, [values.pincode]);

  async function handleSave(apiEndpoint: string, id: string) {
    setSaving(true);
    try {
      if (validateAddress(values, state)) {
        await axios.post(
          apiEndpoint,
          apiEndpoint === "/api/address/editAddress"
            ? { id, values, state: state.value || state }
            : { uid: id, values, state: state.value || state },
        );
        toast.success("Address saved successfully");
        setSaving(false);
        return true;
      }
    } catch (err: any) {
      toast.error(err.message);
    }
    setSaving(false);
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
