import Address from "./Address";
import Section from "../Section";
import NewAddress from "./NewAddress";
import ManageAddress from "./ManageAddress";
import { IoLocationOutline } from "react-icons/io5";
import NoResult from "@/components/shared/NoResult";

export default function AddressSection({ addresses }: { addresses: any }) {
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
              <ManageAddress address={address} />
            </div>
          ))}
          {addresses.length === 0 && (
            <NoResult
              title="No address found"
              subtitle="Add a new address by clicking on the button below"
            />
          )}
          <NewAddress />
        </div>
      </Section>
    </>
  );
}
