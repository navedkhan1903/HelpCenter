import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";

interface Props {
  children: JSX.Element;
  onClose: () => void;
  label: string;
  loading: Boolean;
  action: () => void;
  btnLabel: string;
  bottomTxt: string;
}

export default function Modal({
  children,
  onClose,
  label,
  loading,
  action,
  btnLabel,
  bottomTxt,
}: Props) {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black/50"
    >
      <div className="relative z-30 w-11/12 rounded-xl bg-white md:w-auto">
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 rounded-full bg-white shadow-lg duration-200 hover:bg-neutral-100"
        >
          <IoIosClose size={30} />
        </button>

        <p className="rounded-t-xl bg-primary p-7 text-xl font-semibold">
          {label}
        </p>

        {children}

        <p className="mx-7 mt-5 rounded-md bg-primaryLight p-3 text-center text-xs font-medium text-[#996900]">
          {bottomTxt}
        </p>

        <div className="my-7 flex gap-5 px-7">
          <button
            onClick={onClose}
            className="btn w-full bg-neutral-100 hover:bg-neutral-200"
          >
            Cancel
          </button>
          {loading ? (
            <button className="btn w-full bg-primary hover:bg-primaryDark">
              <div className="animate-spin">
                <CgSpinner size={20} />
              </div>
            </button>
          ) : (
            <button
              onClick={action}
              className="btn w-full bg-primary hover:bg-primaryDark"
            >
              {btnLabel}
            </button>
          )}
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
