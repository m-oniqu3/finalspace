import { CheckCircleIcon } from "@heroicons/react/20/solid";

interface Props {
  error: { error: string; valid: boolean };
}

const FormError = (props: Props) => {
  const { error, valid } = props.error;
  return (
    <p className="relative -top-1 h-5 font-normal text-sm text-red-500">
      {error}
      {valid && (
        <span>
          <CheckCircleIcon className="h-5 w-5 text-indigo-900" />
        </span>
      )}
    </p>
  );
};

export default FormError;
