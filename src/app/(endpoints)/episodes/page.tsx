import Empty from "@/components/Empty";
import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Episode } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { filterEpisodes } from "@/utils/filters";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Episodes = async (props: Props) => {
  const data = await fetchData<Episode>("episode");
  const { search } = props.searchParams;

  function filterData() {
    if (!search) return data;

    return data.filter((ep) => {
      return filterEpisodes(ep, search as string);
    });
  }

  const filteredEpisodes = filterData();

  const renderEpisodes = filteredEpisodes.map((episode) => {
    const airDate = new Date(episode.air_date).toDateString().split(" ").slice(1).join(" ");

    return (
      <Card
        id={`E #${episode.id.toString().padStart(3, "0")}`}
        link={`/episodes/${episode.id}`}
        url={episode.img_url}
        title={episode.name}
        subtitle={airDate}
        text={`Characters: ${episode.characters.length}`}
        key={episode.id}
        cardType="episode"
        isLiked={false}
      />
    );
  });

  let content = filteredEpisodes.length ? <Grid>{renderEpisodes}</Grid> : <Empty />;

  return <StaticLayout>{content}</StaticLayout>;
};

export default Episodes;
