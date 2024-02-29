"use client";

import "./Calendar.css";
import Loading from "./Loading";
import { useState } from "react";
import CurrStep from "./CurrStep";
import Skeleton from "./Skeleton";
import dynamic from "next/dynamic";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import { validateStep } from "@/utils/functions";
import NoResult from "@/components/shared/NoResult";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import NewAddress from "@/components/profile/address/NewAddress";
import useFetchAddresses from "@/hooks/booking/useFetchAddresses";
const DynamicSlots = dynamic(() => import("./Slots"), {
  loading: () => <Loading />,
});
const DynamicAddress = dynamic(() => import("./Address"), {
  loading: () => <Loading />,
});

export default function BookServiceClient() {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [date, setDate] = useState<any>(new Date());
  const [selectedAddress, setSelectedAddress] = useState();
  const [step, setStep] = useState(1);

  const { addLoading, addresses } = useFetchAddresses();

  return (
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
              <Skeleton />
            ) : addresses?.length === 0 ? (
              <>
                <NoResult
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
          Next
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </>
  );
}
