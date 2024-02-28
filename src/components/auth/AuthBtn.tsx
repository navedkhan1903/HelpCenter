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
          <CgSpinner size={20} className="animate-spin" />
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
