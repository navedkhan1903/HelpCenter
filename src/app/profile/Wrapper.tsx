import { MdOutlineEdit } from "react-icons/md";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

interface Props {
  label: string;
  children: JSX.Element;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  disabled: Boolean;
}

export default function Wrapper({
  label,
  children,
  onEdit,
  onSave,
  onCancel,
  disabled,
}: Props) {
  return (
    <div className="w-full pl-10">
      <div className="flex items-center justify-between gap-3 border-b-[1px] border-lightGray pb-7">
        <p className="h-11 text-2xl font-semibold">{label}</p>
        {disabled ? (
          <div
            onClick={onEdit}
            className="cursor-pointer rounded-full bg-neutral-50 p-3 text-darkGray duration-200 hover:bg-neutral-100"
          >
            <MdOutlineEdit size={18} />
          </div>
        ) : (
          <div className="flex gap-3">
            <div
              onClick={onSave}
              className="cursor-pointer rounded-full bg-green-50 p-3 text-green-700 duration-200 hover:bg-green-100"
            >
              <IoMdCheckmark size={18} />
            </div>
            <div
              onClick={onCancel}
              className="cursor-pointer rounded-full bg-red-50 p-3 text-red-700 duration-200 hover:bg-red-100"
            >
              <IoMdClose size={18} />
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
