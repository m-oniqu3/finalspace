import Empty from "@/components/Empty";
import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Character } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { filterCharacters } from "@/utils/filters";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async (props: Props) => {
  const data = await fetchData<Character>("character");
  const { search } = props.searchParams;

  function filterData() {
    if (!search) return data;

    return data.filter((character) => {
      return filterCharacters(character, search as string);
    });
  }

  const filteredCharacters = filterData();

  const renderCharacters = filteredCharacters.map((character) => {
    return (
      <Card
        id={`C #${character.id.toString().padStart(3, "0")}`}
        link={`/characters/${character.id}`}
        url={character.img_url}
        title={character.name}
        subtitle={character.species}
        text={character.origin}
        key={character.id}
      />
    );
  });

  let content = filteredCharacters.length ? (
    <Grid>{renderCharacters}</Grid>
  ) : (
    <Empty />
  );

  return <StaticLayout>{content}</StaticLayout>;
};

export default page;
