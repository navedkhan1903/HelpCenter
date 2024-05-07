import { Toaster } from "react-hot-toast";
import Session from "@/components/shared/Session";
import ReduxProvider from "@/components/shared/ReduxProvider";
import VerifyOtpClient from "@/components/auth/VerifyOtpClient";

export default function Login({ searchParams }: { searchParams: any }) {
  return (
    <Session status="unauthenticated" path="/login">
      <div className="mx-auto flex h-[calc(100vh-69.71px)] translate-y-[69.71px] items-center">
        <Toaster />
        <div className="mx-auto flex flex-col rounded-3xl border-lightGray py-8 md:border-[1px] md:px-10">
          <p className="mb-8 text-center text-xl font-semibold">Verify OTP</p>
          <div className="text-center text-sm font-medium text-gray">
            <p>Enter the 4-digit verification code that</p>
            <p>was sent to your email address</p>
          </div>
          <ReduxProvider>
            <VerifyOtpClient flow={searchParams.flow} />
          </ReduxProvider>
        </div>
      </div>
    </Session>
  );
}
