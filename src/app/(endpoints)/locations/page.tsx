import Empty from "@/components/Empty";
import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Location } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { filterLocations } from "@/utils/filters";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Locations = async (props: Props) => {
  const data = await fetchData<Location>("location");
  const { search } = props.searchParams;

  function filterData() {
    if (!search) return data;

    return data.filter((character) => {
      return filterLocations(character, search as string);
    });
  }

  const filteredLocations = filterData();

  const renderLocations = filteredLocations.map((location) => {
    return (
      <Card
        id={`L #${location.id.toString().padStart(3, "0")}`}
        link={`/locations/${location.id}`}
        url={location.img_url}
        title={location.name}
        subtitle={location.type}
        text={`Inhabitants: ${location.inhabitants.length}`}
        key={location.id}
        cardType="location"
        isLiked={false}
      />
    );
  });

  let content = filteredLocations.length ? <Grid>{renderLocations}</Grid> : <Empty />;

  return <StaticLayout>{content}</StaticLayout>;
};

export default Locations;
