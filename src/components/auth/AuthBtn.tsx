import { CgSpinner } from "react-icons/cg";

interface Props {
  loading: boolean;
  label: string;
  onClick: () => void;
}

export default function AuthBtn({ loading, label, onClick }: Props) {
  return (
    <>
      {loading ? (
        <div className="flex justify-center rounded-md bg-primary px-6 py-3">
          <div className="animate-spin">
            <CgSpinner size={20} />
          </div>
        </div>
      ) : (
        <p
          onClick={onClick}
          className="cursor-pointer rounded-md bg-primary px-6 py-3 text-center text-sm font-semibold text-darkGray duration-200 hover:bg-primaryDark active:animate-primaryBtnAnimation"
        >
          {label}
        </p>
      )}
    </>
  );
}
