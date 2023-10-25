import DynamicLayout from "@/components/layouts/DynamicLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import Pill from "@/components/ui/Pill";
import { Character, Location } from "@/types";
import { fetchDataById } from "@/utils/fetchData";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const page = async (props: Props) => {
  const {
    params: { id },
  } = props;

  const location: Location = await fetchDataById("location", +id);

  const residents: Character[] = await Promise.all(
    location.notable_residents.map(async (character) => {
      const id = character.split("/").pop()!;
      const characterData: Character = await fetchDataById("character", +id);
      return characterData;
    })
  );

  return (
    <DynamicLayout>
      <section className="grid gap-24">
        <section className="flex flex-col gap-4 items-center">
          <div className="rounded-xl bg-indigo-200 p-8 border border-indigo-300 max-w-[280px]">
            <Image
              src={location.img_url}
              alt={location.name}
              width={200}
              height={200}
              placeholder="blur"
              blurDataURL={location.img_url}
              className="rounded-lg w-full object-cover"
            />
          </div>

          <article className="flex flex-col gap-2 items-center text-indigo-900">
            <h1 className="font-bold text-4xl truncate ">{location.name}</h1>

            <p className="font-normal truncate">Type: {location.type}</p>

            {residents.length > 0 && (
              <div className="grid place-items-center gap-2 max-w-xs mx-auto">
                <p className="font-normal truncate">Inhabitants</p>
                <div className="flex gap-4 flex-wrap justify-center">
                  {location.inhabitants.map((person) => {
                    return <Pill text={person} key={person} />;
                  })}
                </div>
              </div>
            )}
          </article>
        </section>

        {residents.length > 0 && (
          <article className="grid place-items-center gap-4">
            <h2 className="font-medium text-2xl mb-4 text-indigo-900">Residents of {location.name}</h2>
            <Grid>
              {residents.map((character) => {
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
                    isLiked={false}
                  />
                );
              })}
            </Grid>
          </article>
        )}
      </section>
    </DynamicLayout>
  );
};

export default page;
