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
        <div className="btn w-80 bg-primary">
          <div className="animate-spin">
            <CgSpinner size={20} />
          </div>
        </div>
      ) : (
        <button
          onClick={onClick}
          className="btn w-80 bg-primary hover:bg-primaryDark"
        >
          {label}
        </button>
      )}
    </>
  );
}
