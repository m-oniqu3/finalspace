import EmptyLikes from "@/components/EmptyLikes";
import ErrorMessage from "@/components/ErrorMessage";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Fragment } from "react";

const LocationLikes = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  let { data: locations, error } = await supabase.from("locations").select().order("created_at", { ascending: false });

  const renderLocations = (function () {
    if (error) {
      return <ErrorMessage message="We could not get your liked locations" />;
    } else if (locations?.length === 0 || locations === null) {
      return <EmptyLikes category="locations" />;
    }

    return (
      <Grid>
        {locations.map((location) => {
          return (
            <Card
              id={`L #${location.card_id!.toString().padStart(3, "0")}`}
              link={location.link}
              url={location.url ?? ""}
              title={location.title}
              subtitle={location.subtitle}
              text={location.text ?? ""}
              key={location.id}
              cardType="location"
              isLiked={true}
            />
          );
        })}
      </Grid>
    );
  })();

  return <Fragment>{renderLocations}</Fragment>;
};

export default LocationLikes;
