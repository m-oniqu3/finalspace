import Empty from "@/components/Empty";
import ErrorMessage from "@/components/ErrorMessage";
import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { Location } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { filterLocations } from "@/utils/filters";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Locations = async (props: Props) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const data = await fetchData<Location>("location");
  const { search } = props.searchParams;

  let { data: locations, error } = await supabase.from("locations").select("card_id");

  if (error) {
    return <ErrorMessage message="We could not load your liked locations." />;
  }

  const likedLocations: number[] = locations?.map((location) => location.card_id as number) || [];

  function filterData() {
    if (!search) return data;

    return data.filter((character) => {
      return filterLocations(character, search as string);
    });
  }

  const filteredLocations = filterData();

  const renderLocations = filteredLocations.map((location) => {
    const isLiked = likedLocations.includes(location.id);

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
        isLiked={isLiked}
      />
    );
  });

  let content = filteredLocations.length ? <Grid>{renderLocations}</Grid> : <Empty />;

  return <StaticLayout>{content}</StaticLayout>;
};

export default Locations;
