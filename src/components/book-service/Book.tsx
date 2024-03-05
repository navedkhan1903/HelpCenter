import Link from "next/link";
import Search from "@/lotties/Search.json";
import { useEffect, useState } from "react";
import Success from "@/lotties/Success.json";
import LottieWrapper from "../shared/LottieWrapper";

export default function Book({ setStep }: { setStep: any }) {
  const [booked, setBooked] = useState(false);
  const [sec, setSec] = useState(1);

  useEffect(() => {
    setTimeout(() => setBooked(true), 5000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => setSec((curr) => (curr % 3) + 1),
      1000,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-[539px] flex-col items-center justify-center">
      <LottieWrapper
        options={{
          loop: booked ? false : true,
          autoplay: true,
          animationData: booked ? Success : Search,
        }}
        height={310}
        width={310}
      />
      <p className="text-center text-3xl font-semibold">
        {booked
          ? "Service Booked!"
          : `Connecting${sec === 1 ? "." : sec === 2 ? ".." : "..."}`}
      </p>
      <p className="mt-1 text-center font-medium text-gray">
        {booked
          ? "Voila! You are now linked up with the perfect provider for your needs."
          : "Sit tight, your service superhero is just a few seconds away!"}
      </p>
      {booked ? (
        <Link
          href={"/active-services"}
          className="btn mt-10 bg-primary hover:bg-primaryDark"
        >
          View Active Services
        </Link>
      ) : (
        <button
          onClick={() => setStep(3)}
          className="btn mt-10 bg-red-100 text-red-700 hover:bg-red-200"
        >
          Cancel
        </button>
      )}
    </div>
  );
}
