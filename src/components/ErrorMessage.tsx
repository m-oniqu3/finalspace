import { Russo_One } from "next/font/google";
const russo = Russo_One({ weight: "400", subsets: ["latin"] });

interface Props {
  message: string;
}

const ErrorMessage = (props: Props) => {
  const { message } = props;
  return (
    <section className="h-[60vh] grid place-items-center">
      <article className={`flex flex-col gap-2 items-center text-center max-w-[300px]`}>
        <h1 className={`${russo.className} text-xl text-indigo-900`}>Something went wrong</h1>
        <p>{message} Try refreshing the page.</p>
      </article>
    </section>
  );
};

export default ErrorMessage;
