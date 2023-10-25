import DynamicLayout from "@/components/layouts/DynamicLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { Fragment } from "react";

export const dynamic = "force-dynamic";
const options = ["Characters", "Locations", "Episodes"];

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async (props: Props) => {
  const { searchParams } = props;
  const supabase = createServerComponentClient<Database>({ cookies });
  // console.log(searchParams["query"]);

  let { data: characters, error } = await supabase
    .from(searchParams["query"] as string)
    .select()
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  //if (characters) console.log(characters);

  const content = (() => {
    switch (searchParams["query"]) {
      case "characters":
        return characters;

      case "locations":
        return "locations" as string;

      case "episodes":
        return "episodes" as string;

      default:
        return null;
    }
  })();

  const renderContent = () => {
    if (typeof content === "string") {
      return <p>{content}</p>;
    } else if (typeof content === "object" && content !== null) {
      return (
        <Grid>
          {content.map((character) => {
            return (
              <Card
                id={`C #${character.card_id.toString().padStart(3, "0")}`}
                link={character.link}
                url={character.url}
                title={character.title}
                subtitle={character.subtitle}
                text={character.text}
                key={character.id}
                cardType="character"
                isLiked={true}
              />
            );
          })}
        </Grid>
      );
    }
  };

  const renderOptions = options.map((option) => {
    const isActive = option.toLowerCase() === searchParams["query"];
    return (
      <li
        key={option}
        className={` ${
          isActive ? "text-slate-700" : "text-slate-400"
        }  text-center p-2 rounded-md hover:underline hover:text-slate-700`}
      >
        <Link href={`?query=${option.toLowerCase()}`}>{option}</Link>
      </li>
    );
  });

  return (
    <DynamicLayout>
      <nav className="mb-6">
        <ul className="grid grid-cols-3 gap-2 w-fit mx-auto md:m-0 md:ml-auto">{renderOptions}</ul>
      </nav>

      <Fragment>{renderContent()}</Fragment>
    </DynamicLayout>
  );
};

export default page;
