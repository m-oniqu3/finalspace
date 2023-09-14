import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Episode } from "@/types";
import { fetchData } from "@/utils/fetchData";

const Episodes = async () => {
  const data = await fetchData<Episode>("episode");

  const renderEpisodes = data.map((episode) => {
    const airDate = new Date(episode.air_date)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ");

    return (
      <Card
        id={`E #${episode.id.toString().padStart(3, "0")}`}
        link={`/episodes/${episode.id}`}
        url={episode.img_url}
        title={episode.name}
        subtitle={airDate}
        text={`Characters: ${episode.characters.length}`}
        key={episode.id}
      />
    );
  });

  return (
    <StaticLayout>
      <Grid>{renderEpisodes}</Grid>
    </StaticLayout>
  );
};

export default Episodes;
