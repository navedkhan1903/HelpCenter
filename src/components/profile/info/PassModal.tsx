import Input from "../Input";
import Password from "@/lotties/Password.json";
import LottieWrapper from "@/components/shared/LottieWrapper";

interface Props {
  onOldChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  onNewChange: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function PassModal({ onOldChange, onNewChange }: Props) {
  return (
    <div className="px-7 pt-7">
      <LottieWrapper
        options={{
          loop: false,
          autoplay: true,
          animationData: Password,
        }}
        height={200}
        width={200}
      />
      <div className="py-5">
        <Input placeholder="Old Password" onChange={onOldChange} />
      </div>
      <Input placeholder="New Password" onChange={onNewChange} />
    </div>
  );
}
