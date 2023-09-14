import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Character } from "@/types";
import { fetchData } from "@/utils/fetchData";

const page = async () => {
  const data = await fetchData<Character>("character");

  const renderCharacters = data.map((character) => {
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

  return (
    <StaticLayout>
      <Grid>{renderCharacters}</Grid>
    </StaticLayout>
  );
};

export default page;
