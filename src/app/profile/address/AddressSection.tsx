import NewAddress from "./NewAddress";
import ManageAddress from "./ManageAddress";
import NoResult from "@/components/NoResult";
import Address from "@/components/profile/Address";
import Section from "@/components/profile/Section";
import { IoLocationOutline } from "react-icons/io5";

interface Props {
  addresses: any;
  onUpdate: () => void;
}

export default function AddressSection({ addresses, onUpdate }: Props) {
  return (
    <>
      <Section
        label={"Manage Addresses"}
        icon={<IoLocationOutline size={18} />}
      >
        <div className="p-6">
          {addresses.map((address: any, i: number) => (
            <div
              key={i}
              className="mb-6 flex justify-between rounded-md border-[1px] border-lightGray bg-neutral-50 p-6 text-sm font-semibold"
            >
              <div>
                <Address address={address} />
              </div>
              <ManageAddress address={address} onUpdate={() => onUpdate()} />
            </div>
          ))}
          {addresses.length === 0 && (
            <NoResult
              title="No address found"
              subtitle="Add a new address by clicking on the button below"
            />
          )}
          <NewAddress onUpdate={() => onUpdate()} />
        </div>
      </Section>
    </>
  );
}
