import Link from "next/link";
import AuthSocial from "./AuthSocial";

interface Props {
  children: JSX.Element;
  label: string;
  footerText: string;
  link: string;
  footerLabel: string;
}

export default function AuthContainer(props: Props) {
  const { children, label, footerText, link, footerLabel } = props;

  return (
    <div className="mx-auto flex h-[calc(100vh-69.71px)] translate-y-[69.71px] items-center">
      <div className="mx-auto flex flex-col rounded-3xl border-lightGray py-8 md:border-[1px] md:px-10">
        <p className="mb-8 text-center text-xl font-semibold">{label}</p>
        {children}
        <AuthSocial />
        <p className="mt-8 text-center text-sm font-medium text-gray">
          {footerText}{" "}
          <Link
            href={link}
            className="cursor-pointer font-semibold text-sky-700"
          >
            {footerLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
