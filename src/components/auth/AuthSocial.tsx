import Image from "next/image";
import { socialLogin } from "@/utils/data";

export default function AuthSocial() {
  return (
    <>
      <div className="my-5 flex items-center">
        <div className="h-[1px] w-full bg-neutral-100"></div>
        <div className="mx-5 text-sm font-normal text-gray">or</div>
        <div className="h-[1px] w-full bg-neutral-100"></div>
      </div>
      <div className="flex justify-between gap-5 text-sm font-medium text-darkGray">
        {socialLogin.map((item, i) => (
          <div
            key={i}
            className="flex flex-1 cursor-pointer justify-center gap-3 rounded-md border-2 border-neutral-100 px-5 py-3 duration-200 hover:bg-neutral-100 active:animate-socialBtnAnimation"
          >
            <div>
              <Image
                src={item.src}
                width={18}
                height={18}
                alt={item.alt}
                sizes="100vw"
                quality="100"
              />
            </div>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
