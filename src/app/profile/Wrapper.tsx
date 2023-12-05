import { MdOutlineEdit } from "react-icons/md";

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

        {disabled && (
          <div
            onClick={onEdit}
            className="cursor-pointer rounded-full bg-neutral-50 p-3 text-darkGray duration-200 hover:bg-neutral-100"
          >
            <MdOutlineEdit size={18} />
          </div>
        )}
      </div>

      {children}

      {!disabled && (
        <div className="mt-10 flex justify-between">
          <div
            onClick={onCancel}
            className="w-[280px] cursor-pointer rounded-md border-[1px] border-red-700 px-6 py-3 text-center text-sm font-semibold text-red-700 duration-200 hover:bg-red-50"
          >
            Cancel
          </div>
          <div
            onClick={onSave}
            className="w-[280px] cursor-pointer rounded-md border-[1px] border-green-700 px-6 py-3 text-center text-sm font-semibold text-green-700 duration-200 hover:bg-green-50"
          >
            Save Changes
          </div>
        </div>
      )}
    </div>
  );
}
