import Section from "./Section";
import { LuUser2 } from "react-icons/lu";

export default function Info() {
  return (
    <Section label={"Personal Information"} icon={<LuUser2 size={18} />}>
      <div>Hello</div>
    </Section>
  );
}
