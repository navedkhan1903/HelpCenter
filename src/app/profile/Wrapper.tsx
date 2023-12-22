import { CgSpinner } from "react-icons/cg";
import { MdOutlineEdit } from "react-icons/md";

interface Props {
  label: string;
  children: JSX.Element | null;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  disabled: Boolean;
  loading: Boolean;
}

export default function Wrapper({
  label,
  children,
  onEdit,
  onSave,
  onCancel,
  disabled,
  loading,
}: Props) {
  return (
    <div className="w-full pl-10">
      <div className="flex items-center justify-between gap-3 border-b-[1px] border-lightGray pb-7">
        <p className="flex h-11 items-center text-xl font-semibold">{label}</p>

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
        <div className="mt-10 flex justify-between gap-10">
          <p
            onClick={onCancel}
            className="w-full cursor-pointer rounded-md border-[1px] border-red-700 px-6 py-3 text-center text-sm font-semibold text-red-700 duration-200 hover:bg-red-50"
          >
            Cancel
          </p>

          {loading ? (
            <div className="flex w-full justify-center rounded-md border-[1px] border-green-700 px-6 py-3 text-green-700">
              <div className="animate-spin">
                <CgSpinner size={20} />
              </div>
            </div>
          ) : (
            <p
              onClick={onSave}
              className="w-full cursor-pointer rounded-md border-[1px] border-green-700 px-6 py-3 text-center text-sm font-semibold text-green-700 duration-200 hover:bg-green-50"
            >
              Save Changes
            </p>
          )}
        </div>
      )}
    </div>
  );
}
