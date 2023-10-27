import Empty from "@/components/Empty";
import ErrorMessage from "@/components/ErrorMessage";
import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { Character } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { filterCharacters } from "@/utils/filters";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Final Space Characters",
  description: "A list of all the characters from the show Final Space.",
};

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async (props: Props) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const data = await fetchData<Character>("character");

  // get liked characters from database
  let { data: characters, error } = await supabase.from("characters").select("card_id");

  if (error) {
    return <ErrorMessage message="We could not load your liked characters." />;
  }

  const likedCharacters: number[] = characters?.map((character) => character.card_id as number) || [];

  const { search } = props.searchParams;

  function filterData() {
    if (!search) return data;

    return data.filter((character) => {
      return filterCharacters(character, search as string);
    });
  }

  const filteredCharacters = filterData();

  const renderCharacters = filteredCharacters.map((character) => {
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
  });

  let content = filteredCharacters.length ? <Grid>{renderCharacters}</Grid> : <Empty />;

  return <StaticLayout>{content}</StaticLayout>;
};

export default page;
