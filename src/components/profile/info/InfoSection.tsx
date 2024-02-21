import InfoClient from "./InfoClient";
import { LuUser2 } from "react-icons/lu";
import Section from "../../profile/Section";

interface Props {
  name: string;
  email: string;
}

export default function InfoSection({ name, email }: Props) {
  return (
    <Section label="Personal Information" icon={<LuUser2 size={18} />}>
      <div className="p-6">
        {[
          { label: "Full Name", value: name },
          { label: "Email Address", value: email },
        ].map((item, i) => (
          <div key={i}>
            <p className="pb-1 text-sm font-semibold text-gray">{item.label}</p>
            <p className="mb-6 overflow-x-auto rounded-md border-[1px] border-lightGray bg-neutral-50 px-4 py-3 text-sm font-semibold">
              {item.value}
            </p>
          </div>
        ))}
        <div className="flex flex-col gap-6 md:flex-row">
          <InfoClient name={name} />
        </div>
      </div>
    </Section>
  );
}
