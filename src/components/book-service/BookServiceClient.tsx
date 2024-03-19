"use client";

import "./Calendar.css";
import CurrStep from "./CurrStep";
import dynamic from "next/dynamic";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import Loading from "../shared/Loading";
import { useEffect, useState } from "react";
import { validateStep } from "@/utils/functions";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import useBookService from "@/hooks/booking/useBookService";
import NewAddress from "@/components/profile/address/NewAddress";
import useFetchAddresses from "@/hooks/booking/useFetchAddresses";
const DynamicBook = dynamic(() => import("./Book"), {
  loading: () => <Loading height={"h-[539px]"} />,
});
const DynamicSlots = dynamic(() => import("./Slots"), {
  loading: () => <Loading height={"h-[335px]"} />,
});
const DynamicAddress = dynamic(() => import("./Address"), {
  loading: () => <Loading height={"h-[335px]"} />,
});
const DynamicSkeleton = dynamic(() => import("./Skeleton"), {
  loading: () => <Loading height={"h-[335px]"} />,
});
const DynamicNoResult = dynamic(() => import("@/components/shared/NoResult"), {
  loading: () => <Loading height={"h-[335px]"} />,
});

export default function BookServiceClient({ service }: { service: String }) {
  const [date, setDate] = useState<any>(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [step, setStep] = useState(1);

  const { addLoading, addresses } = useFetchAddresses();
  const { handleBook, booked, error } = useBookService();

  useEffect(() => {
    if (step === 4)
      handleBook(service, date, selectedSlot, addresses?.[selectedAddress - 1]);
  }, [step]);

  return (
    <>
      {step != 4 ? (
        <>
          <CurrStep step={step} />

          <div className="my-14 flex items-center justify-center overflow-y-auto">
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="h-[335px]"
              >
                <Calendar onChange={setDate} value={date} />
              </motion.div>
            ) : step === 2 ? (
              <DynamicSlots
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
              />
            ) : (
              <div className="flex h-[335px] w-full flex-col items-center gap-7">
                {addLoading ? (
                  <DynamicSkeleton />
                ) : addresses?.length === 0 ? (
                  <>
                    <DynamicNoResult
                      title="No address found"
                      subtitle="Add a new address by clicking on the button below"
                    />
                    <NewAddress />
                  </>
                ) : (
                  <>
                    <DynamicAddress
                      addresses={addresses}
                      selectedAddress={selectedAddress}
                      setSelectedAddress={setSelectedAddress}
                    />
                    <NewAddress />
                  </>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-7 md:justify-end">
            {step != 1 && (
              <button
                onClick={() => setStep((curr) => curr - 1)}
                className="btn w-full bg-neutral-100 hover:bg-neutral-200 md:w-auto"
              >
                <FaArrowLeft className="mr-2" />
                Back
              </button>
            )}
            <button
              onClick={() => {
                if (validateStep(step, date, selectedSlot, selectedAddress))
                  setStep((curr) => curr + 1);
              }}
              className="btn w-full bg-primary hover:bg-primaryDark md:w-auto"
            >
              {step != 3 ? "Next" : "Book"}
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </>
      ) : (
        <DynamicBook setStep={setStep} booked={booked} error={error} />
      )}
    </>
  );
}
