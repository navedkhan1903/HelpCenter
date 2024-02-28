"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import "@/components/book-service/Calendar.css";
import { validateStep } from "@/utils/functions";
import NoResult from "@/components/shared/NoResult";
import Slots from "@/components/book-service/Slots";
import Address from "@/components/book-service/Address";
import CurrStep from "@/components/book-service/CurrStep";
import Skeleton from "@/components/book-service/Skeleton";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import NewAddress from "@/components/profile/address/NewAddress";
import useFetchAddresses from "@/hooks/booking/useFetchAddresses";

export default function BookServiceClient() {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [date, setDate] = useState<any>(new Date());
  const [selectedAddress, setSelectedAddress] = useState();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);

  const { addLoading, addresses } = useFetchAddresses();

  function handleStep(setStepA: any, setStepB: any) {
    setStepA(false);
    setStepB(true);
  }

  return (
    <>
      <CurrStep step1={step1} step2={step2} step3={step3} />

      <div className="my-14 flex items-center justify-center overflow-y-auto">
        {step1 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-[335px]"
          >
            <Calendar onChange={setDate} value={date} />
          </motion.div>
        ) : step2 ? (
          <Slots
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        ) : (
          <div className="flex h-[335px] w-full flex-col gap-7">
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
                <Address
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
        {!step1 && (
          <button
            onClick={() =>
              step2
                ? handleStep(setStep2, setStep1)
                : step3
                ? handleStep(setStep3, setStep2)
                : handleStep(setStep4, setStep3)
            }
            className="btn w-full bg-neutral-100 hover:bg-neutral-200 md:w-auto"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </button>
        )}
        <button
          onClick={() => {
            if (
              validateStep(
                step1 ? 1 : step2 ? 2 : 3,
                date,
                selectedSlot,
                selectedAddress,
              )
            )
              step1
                ? handleStep(setStep1, setStep2)
                : step2
                ? handleStep(setStep2, setStep3)
                : handleStep(setStep3, setStep4);
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
