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
          className="mt-2 font-normal bg-indigo-300 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-600  hover:text-indigo-100 transition-all ease-in-out duration-300"
        >
          Take me there
        </Link>
      </article>
    </section>
  );
};

export default EmptyLikes;
