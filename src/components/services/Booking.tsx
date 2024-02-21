"use client";

import "./Calendar.css";
import Modal from "../shared/Modal";
import toast from "react-hot-toast";
import Calendar from "react-calendar";
import { auth } from "@/utils/firebase";
import { timeSlots } from "@/utils/data";
import { useEffect, useState } from "react";
import Finding from "@/lotties/Finding.json";
import LottieWrapper from "../shared/LottieWrapper";
import { AnimatePresence, motion } from "framer-motion";

export default function Booking() {
  const [modalOpen, setModalOpen] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<any>(new Date());
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<String>();
  const [addresses, setAddresses] = useState<any[]>();
  const [selectedAddress, setSelectedAddress] = useState();

  useEffect(() => {
    (async () => {
      if (step3) {
        setAddLoading(true);
        try {
          setAddresses(
            await fetch(`/api/address/addresses/${auth.currentUser?.uid}`).then(
              (res) => res.json(),
            ),
          );
        } catch {
          toast.error("Couldn't fetch addresses");
        }
        setAddLoading(false);
      }
    })();
  }, [step3]);

  function handleOpenModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseModal() {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setDate(new Date());
    setSelectedSlot("");
    setSelectedAddress(undefined);
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  function step1ToStep2() {
    if (date < new Date().setHours(0, 0, 0, 0)) {
      toast.error("Selected date must be today or a future date");
      return;
    }
    setStep1(false);
    setStep2(true);
  }

  function step2ToStep1() {
    setStep1(true);
    setStep2(false);
  }

  function step2ToStep3() {
    if (!selectedSlot) {
      toast.error("Kindly select a suitable slot");
      return;
    }
    setStep2(false);
    setStep3(true);
  }

  function step3ToStep2() {
    setStep2(true);
    setStep3(false);
  }

  function step3ToStep4() {
    if (!selectedAddress) {
      toast.error("Kindly select an address");
      return;
    }
    setStep3(false);
    setStep4(true);
  }

  function step4ToStep3() {
    setStep4(false);
    setStep3(true);
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="btn w-full bg-primary hover:bg-primaryDark"
      >
        Book Service
      </button>

      <AnimatePresence>
        {modalOpen && (
          <Modal
            onClose={handleCloseModal}
            label={`Booking Confirmation (${
              step4 ? "4" : step3 ? "3" : step2 ? "2" : "1"
            }/4)`}
          >
            <div className="p-7">
              {step1 && (
                <div className="flex h-[320px] items-center justify-center">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    className="react-calendar"
                  />
                  <div className="absolute bottom-7 left-0 w-full px-7">
                    <p className="mt-5 rounded-md bg-primaryLight p-3 text-center text-xs font-medium text-[#996900]">
                      Select Date
                    </p>
                    <div className="mt-7 flex gap-5">
                      <button
                        onClick={handleCloseModal}
                        className="btn w-full bg-neutral-100 hover:bg-neutral-200"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={step1ToStep2}
                        className="btn w-full bg-primary hover:bg-primaryDark"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step2 && (
                <>
                  <div className="grid h-[320px] grid-cols-2 items-center gap-7">
                    {timeSlots.map((slot, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                        onClick={() => setSelectedSlot(slot.label)}
                        className={`${
                          selectedSlot && selectedSlot === slot.label
                            ? "border-[1px] border-darkGray bg-primaryLight"
                            : "border-[1px] border-lightGray"
                        } cursor-pointer rounded-md p-7 duration-200 hover:bg-primaryLight`}
                      >
                        <div>
                          {slot.icon}
                          <p className="py-1 text-sm font-semibold">
                            {slot.label}
                          </p>
                          <p className="text-xs font-medium text-gray">
                            {slot.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute bottom-7 left-0 w-full px-7">
                    <p className="mt-5 rounded-md bg-primaryLight p-3 text-center text-xs font-medium text-[#996900]">
                      Select Time Slot
                    </p>
                    <div className="mt-7 flex gap-5">
                      <button
                        onClick={step2ToStep1}
                        className="btn w-full bg-neutral-100 hover:bg-neutral-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={step2ToStep3}
                        className="btn w-full bg-primary hover:bg-primaryDark"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              )}

              {step3 && (
                <>
                  <div className="flex h-[320px] flex-col gap-5 overflow-y-auto text-sm font-semibold">
                    {addLoading ? (
                      <>
                        <div className="h-[324px] animate-pulse bg-neutral-100" />
                        <div className="h-[324px] animate-pulse bg-neutral-100" />
                        <div className="h-[324px] animate-pulse bg-neutral-100" />
                      </>
                    ) : (
                      <>
                        {addresses && (
                          <>
                            {addresses.map((address: any, i: any) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                onClick={() => setSelectedAddress(i + 1)}
                                className={`${
                                  selectedAddress && selectedAddress === i + 1
                                    ? "border-[1px] border-darkGray bg-primaryLight"
                                    : "border-[1px] border-lightGray"
                                } cursor-pointer rounded-md p-5 font-medium leading-6 duration-200 hover:bg-primaryLight`}
                              >
                                <p>
                                  {address.phone}
                                  {address.altPhone && ", " + address.altPhone}
                                </p>
                                <p className="font-semibold">
                                  {address.address}, {address.locality},{" "}
                                  {address.city}, {address.state},{" "}
                                  {address.pincode}
                                </p>
                              </motion.div>
                            ))}
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className="absolute bottom-7 left-0 w-full px-7">
                    <p className="mt-5 rounded-md bg-primaryLight p-3 text-center text-xs font-medium text-[#996900]">
                      Select Address
                    </p>
                    <div className="mt-7 flex gap-5">
                      <button
                        onClick={step3ToStep2}
                        className="btn w-full bg-neutral-100 hover:bg-neutral-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={step3ToStep4}
                        className="btn w-full bg-primary hover:bg-primaryDark"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              )}

              {step4 && (
                <>
                  <div className="flex h-[320px] flex-col justify-center text-center">
                    <LottieWrapper
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: Finding,
                      }}
                      height={200}
                      width={200}
                    />
                    <p className="mt-5 text-lg font-semibold">Almost There!</p>
                    <p className="text-sm font-medium text-gray">
                      Connecting you with Service Providers
                    </p>
                  </div>
                  <div className="absolute bottom-7 left-0 w-full px-7">
                    <div className="mt-7 flex gap-5">
                      <button
                        onClick={step4ToStep3}
                        className="btn w-full bg-neutral-100 hover:bg-neutral-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleCloseModal}
                        className="btn w-full bg-red-100 text-red-700 hover:bg-red-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
