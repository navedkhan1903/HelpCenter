import { FiMail } from "react-icons/fi";
import CustomInput from "@/components/CustomInput";

export default function NewsLetter() {
  return (
    <div className="mx-auto mb-40 w-full bg-primaryLight py-20 text-center md:w-10/12 md:rounded-3xl">
      <p className="mx-auto mb-10 w-10/12 text-3xl font-semibold text-darkGray md:w-8/12 lg:w-7/12 lg:text-4xl">
        Subscribe Newsletter & Get Boundless Discount
      </p>
      <div className="mx-auto w-max">
        <CustomInput
          icon={<FiMail color="#767676" size="18" />}
          placeholder="Email Address"
          label="Subscribe"
        />
      </div>
    </div>
  );
}
