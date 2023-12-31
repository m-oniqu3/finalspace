import EmptyLikes from "@/components/EmptyLikes";
import ErrorMessage from "@/components/ErrorMessage";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Fragment } from "react";

export const dynamic = "force-dynamic";

const CharacterLikes = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  let { data: characters, error } = await supabase
    .from("characters")
    .select()
    .order("created_at", { ascending: false });

  const renderCharacters = (function () {
    if (error) {
      return <ErrorMessage message="Something went wrong while trying to fetch your likes." />;
    } else if (characters?.length === 0 || characters === null) {
      return <EmptyLikes category="characters" />;
    }

    return (
      <Grid>
        {characters.map((character) => {
          return (
            <Card
              id={`C #${character.card_id.toString().padStart(3, "0")}`}
              link={character.link}
              url={character.url ?? ""}
              title={character.title}
              subtitle={character.subtitle}
              text={character.text ?? ""}
              key={character.id}
              cardType="character"
              isLiked={true}
            />
          );
        })}
      </Grid>
    );
  })();

  return <Fragment>{renderCharacters}</Fragment>;
};

export default CharacterLikes;
