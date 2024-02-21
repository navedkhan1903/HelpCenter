import Address from "./Address";
import Delete from "@/lotties/Delete.json";
import LottieWrapper from "@/components/shared/LottieWrapper";

export default function DeleteModal({ address }: { address: any }) {
  return (
    <div className="px-7 pt-7">
      <LottieWrapper
        options={{
          loop: false,
          autoplay: true,
          animationData: Delete,
        }}
        height={150}
        width={150}
      />
      <div className="mt-5 text-sm font-semibold">
        <Address address={address} />
      </div>
    </div>
  );
}
