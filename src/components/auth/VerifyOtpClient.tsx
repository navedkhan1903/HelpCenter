"use client";

import AuthBtn from "./AuthBtn";
import useVerifyOtp from "@/hooks/auth/useVerifyOtp";

export default function VerifyOtpClient({ flow }: { flow: string }) {
  const {
    timeLeft,
    handleInput,
    handleResend,
    otp,
    inputRefs,
    loginLoading,
    signupLoading,
    handleVerify,
  } = useVerifyOtp();

  return (
    <>
      <div className="my-8 flex justify-between">
        {otp.map((value, i) => (
          <input
            type="text"
            value={value}
            maxLength={1}
            ref={inputRefs[i]}
            onChange={(e) => handleInput(e, i)}
            onKeyDown={(e) => {
              e.key === "Enter" && handleVerify(flow);
            }}
            className="w-16 rounded-md border-2 border-neutral-100 p-3 text-center text-sm font-medium placeholder-gray outline-none duration-200 focus:border-gray"
            key={i}
          />
        ))}
      </div>

      <div className="mb-8 text-center text-sm font-medium text-gray">
        Valid for{" "}
        <span className="font-semibold text-red-700">
          00:{String(timeLeft).padStart(2, "0")}
        </span>
      </div>

      <AuthBtn
        loading={loginLoading || signupLoading}
        label="Verify OTP"
        onClick={() => handleVerify(flow)}
      />

      <p className="mt-8 text-center text-sm font-medium text-gray">
        Didn't receive the OTP?{" "}
        <button onClick={handleResend} className="font-semibold text-sky-700">
          Resend
        </button>
      </p>
    </>
  );
}
