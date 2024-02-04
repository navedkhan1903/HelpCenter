import { states } from "@/utils/data";
import DropDown from "@/components/Dropdown";
import Input from "@/components/profile/Input";
import Skeleton from "@/components/profile/Skeleton";

interface Props {
  onPhoneChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onAltPhoneChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onPincodeChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onLocalityChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onAddressChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onCityChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onStateChange: any;
  values: any;
  state: string;
  loading: Boolean;
}

export default function AddressModal({
  onPhoneChange,
  onAltPhoneChange,
  onPincodeChange,
  onLocalityChange,
  onAddressChange,
  onCityChange,
  onStateChange,
  values,
  state,
  loading,
}: Props) {
  return (
    <div className="px-7">
      <div className="mt-7 flex flex-col gap-5 md:flex-row">
        <Input
          placeholder="10-digit Mobile Number"
          onChange={onPhoneChange}
          value={values.phone}
        />
        <Input
          placeholder="Alternate Phone (Optional)"
          onChange={onAltPhoneChange}
          value={values.altPhone}
        />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <Input
          placeholder="Pincode"
          onChange={onPincodeChange}
          value={values.pincode}
        />
        <Input
          placeholder="Locality"
          onChange={onLocalityChange}
          value={values.locality}
        />
      </div>
      <div className="mt-5">
        <Input
          placeholder="Address"
          onChange={onAddressChange}
          value={values.address}
        />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Input
              placeholder="City/Town/District"
              onChange={onCityChange}
              value={values.city}
            />
            <DropDown options={states} onChange={onStateChange} value={state} />
          </>
        )}
      </div>
    </div>
  );
}
