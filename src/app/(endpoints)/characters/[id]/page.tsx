import DynamicLayout from "@/components/layouts/DynamicLayout";
import Pill from "@/components/ui/Pill";
import { Character } from "@/types";
import { fetchDataById } from "@/utils/fetchData";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const page = async (props: Props) => {
  const {
    params: { id },
  } = props;

  const character: Character = await fetchDataById("character", +id);

  const aliases = character.alias.map((alias, index) => {
    const bracket = alias.indexOf("(");
    alias = bracket !== -1 ? alias.slice(0, bracket) : alias;
    return <Pill text={alias} key={index} />;
  });

  const abilities = character.abilities.map((ability, index) => {
    return <Pill text={ability} key={index} />;
  });

  return (
    <DynamicLayout>
      <section className="grid grid-cols-1 gap-8 place-items-center max-w-4xl mx-auto sm:grid-cols-2 sm:place-items-start">
        <div className="flex flex-col gap-8 items-center sm:items-start">
          <div className="rounded-xl bg-indigo-200 p-8 border border-indigo-300 w-[280px]">
            <Image
              src={character.img_url}
              alt={character.name}
              width={200}
              height={200}
              className="rounded-lg w-full h-100 object-cover"
            />
          </div>

          <article className="grid gap-3 place-items-center sm:place-items-start">
            <h1 className="font-bold text-3xl truncate text-indigo-900">
              {character.name}
            </h1>
            <div className="grid  gap-x-8 gap-y-4 place-items-center sm:place-items-start">
              <p className="font-light text-ellipsis w-fit">
                Species: {character.species}
              </p>
              <p className="font-light">Status: {character.status}</p>
              <p className="font-light">Origin: {character.origin}</p>
              <p className="font-light">Gender: {character.gender}</p>
            </div>
          </article>
        </div>

        <div className="flex flex-col gap-8 ">
          <article>
            <h2 className="font-medium text-lg mb-4 text-indigo-900">
              Aliases
            </h2>
            <div className="flex gap-4 flex-wrap">
              {aliases && aliases.length > 0 ? aliases : "No aliases"}
            </div>
          </article>

          <article>
            <h2 className="font-medium text-lg mb-4 text-indigo-900">
              Abilities
            </h2>
            <div className="flex gap-4 flex-wrap">
              {abilities && abilities.length > 0 ? abilities : "No abilities"}
            </div>
          </article>
        </div>
      </section>
    </DynamicLayout>
  );
};

export default page;
