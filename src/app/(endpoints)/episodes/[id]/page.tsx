import CharacterList from "@/components/CharacterList";
import DynamicLayout from "@/components/layouts/DynamicLayout";
import { Character, Episode } from "@/types";
import { fetchDataById } from "@/utils/fetchData";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const page = async (props: Props) => {
  const {
    params: { id },
  } = props;

  const episode: Episode = await fetchDataById("episode", +id);

  const characters: Character[] = await Promise.all(
    episode.characters.map(async (character) => {
      const id = character.split("/").pop()!;
      const characterData: Character = await fetchDataById("character", +id);
      return characterData;
    })
  );

  const airdate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(episode.air_date));

  return (
    <DynamicLayout>
      <section className="grid gap-24">
        <section className="flex flex-col gap-4 items-center">
          <div className="rounded-xl bg-indigo-200 p-8 border border-indigo-300 max-w-[280px]">
            <Image
              src={episode.img_url}
              alt={episode.name}
              width={200}
              height={200}
              placeholder="blur"
              blurDataURL={episode.img_url}
              className="rounded-lg w-full object-cover"
            />
          </div>

          <article className="flex flex-col gap-2 items-center text-indigo-900">
            <h1 className="font-bold text-4xl truncate ">{episode.name}</h1>
            <p className="font-normal truncate">Written by: {episode.writer}</p>
            <p className="font-normal truncate">Directed by: {episode.director}</p>
            <p className="font-normal truncate">Air Date: {airdate}</p>
          </article>
        </section>

        <CharacterList characters={characters} heading={`Characters in ${episode.name}`} />
      </section>
    </DynamicLayout>
  );
};

export default page;
