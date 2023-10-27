import ErrorMessage from "@/components/ErrorMessage";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { Character } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

interface Props {
  characters: Character[];
  heading: string;
}

const CharacterList = async (props: Props) => {
  const { characters, heading } = props;
  const supabase = createServerComponentClient<Database>({ cookies });
  let { data, error } = await supabase.from("characters").select("card_id");

  if (error) {
    return <ErrorMessage message="We could not fetch your liked characters." />;
  }

  const likedCharacters: number[] = data?.map((character) => character.card_id as number) || [];

  return (
    <article className="grid place-items-center gap-4">
      <h2 className="font-medium text-2xl mb-4 text-indigo-900">{heading}</h2>
      <Grid>
        {characters.map((character) => {
          const isLiked = likedCharacters.includes(character.id);
          return (
            <Card
              id={`C #${character.id.toString().padStart(3, "0")}`}
              link={`/characters/${character.id}`}
              url={character.img_url}
              title={character.name}
              subtitle={character.species}
              text={character.origin}
              key={character.id}
              cardType="character"
              isLiked={isLiked}
            />
          );
        })}
      </Grid>
    </article>
  );
};

export default CharacterList;
