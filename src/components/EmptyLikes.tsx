import { Russo_One } from "next/font/google";
import Link from "next/link";

const russo = Russo_One({ weight: "400", subsets: ["latin"] });

interface Props {
  category: "characters" | "locations" | "episodes";
}

const EmptyLikes = (props: Props) => {
  return (
    <section className="h-[60vh] grid place-items-center">
      <article className={`flex flex-col gap-2 items-center text-center max-w-[300px]`}>
        <h1 className={`${russo.className}  text-xl `}>No favorites yet!</h1>
        <p>
          You have not liked any {props.category} yet. Visit the {props.category} page to get started.
        </p>
        <Link
          href={`/${props.category}`}
          className="mt-2  font-light rounded-md bg-indigo-200 py-1.5 px-5 border border-indigo-300 min-w-fit hover:border-indigo-500 hover:bg-indigo-300  transition duration-300 ease-in-out"
        >
          Take me there
        </Link>
      </article>
    </section>
  );
};

export default EmptyLikes;
