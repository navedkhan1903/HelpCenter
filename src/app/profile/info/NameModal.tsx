import Avatar from "@/lotties/Avatar.json";
import Input from "@/components/profile/Input";
import LottieWrapper from "@/components/LottieWrapper";

interface Props {
  name: string;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function NameModal({ name, onChange }: Props) {
  return (
    <div className="px-7 pt-7">
      <LottieWrapper
        options={{
          loop: false,
          autoplay: true,
          animationData: Avatar,
        }}
        height={150}
        width={150}
      />
      <div className="py-5">
        <p className="font-semibold">Hey {name}!</p>
        <p className="text-sm font-medium">What should we call you from now?</p>
      </div>
      <Input placeholder="Full Name" onChange={onChange} />
    </div>
  );
}
