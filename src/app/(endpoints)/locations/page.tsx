import StaticLayout from "@/components/layouts/StaticLayout";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Location } from "@/types";
import { fetchData } from "@/utils/fetchData";

const Locations = async () => {
  const data = await fetchData<Location>("location");

  const renderLocations = data.map((location) => {
    return (
      <Card
        id={`L #${location.id.toString().padStart(3, "0")}`}
        link={`/locations/${location.id}`}
        url={location.img_url}
        title={location.name}
        subtitle={location.type}
        text={`Inhabitants: ${location.inhabitants.length}`}
        key={location.id}
      />
    );
  });

  return (
    <StaticLayout>
      <Grid>{renderLocations}</Grid>
    </StaticLayout>
  );
};

export default Locations;
