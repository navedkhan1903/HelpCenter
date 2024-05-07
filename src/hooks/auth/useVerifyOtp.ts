import useLogin from "./useLogin";
import toast from "react-hot-toast";
import useSignup from "./useSignup";
import { useSelector } from "react-redux";
import { createTimeoutPromise } from "@/utils/functions";
import { useEffect, useState, useRef, ChangeEvent } from "react";

export default function useVerifyOtp() {
  const [timeLeft, setTimeLeft] = useState(59);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const name = useSelector((state: any) => state.authInfo.name);
  const email = useSelector((state: any) => state.authInfo.email);
  const pass = useSelector((state: any) => state.authInfo.pass);

  const { loginLoading, handleLogin } = useLogin(email, pass);
  const { signupLoading, handleSignup } = useSignup(name, email, pass);

  useEffect(() => {
    inputRefs[0].current?.focus();
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function handleInput(e: ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value) inputRefs[index + 1]?.current?.focus();
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
  }

  function handleResend() {
    toast.promise(createTimeoutPromise(), {
      loading: "Resending OTP",
      success: "OTP resent successfully",
      error: "Something went wrong",
    });
    inputRefs[0].current?.focus();
    setTimeLeft(59);
    setOtp(["", "", "", ""]);
  }

  function handleVerify(flow: string) {
    if (otp.includes("")) return toast.error("Invalid OTP entered");
    flow === "login" ? handleLogin() : handleSignup();
  }

  return {
    timeLeft,
    handleInput,
    handleResend,
    otp,
    inputRefs,
    loginLoading,
    signupLoading,
    handleVerify,
  };
}
