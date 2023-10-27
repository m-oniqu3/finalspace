import EmptyLikes from "@/components/EmptyLikes";
import ErrorMessage from "@/components/ErrorMessage";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Fragment } from "react";

export const dynamic = "force-dynamic";

const EpisodeLikes = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  let { data: episodes, error } = await supabase.from("episodes").select().order("created_at", { ascending: false });

  const renderEpisodes = (function () {
    if (error) {
      return <ErrorMessage message="We could not fetch your liked episodes." />;
    } else if (episodes?.length === 0 || episodes === null) {
      return <EmptyLikes category="episodes" />;
    }

    return (
      <Grid>
        {episodes.map((episode) => {
          return (
            <Card
              id={`C #${episode.card_id.toString().padStart(3, "0")}`}
              link={episode.link}
              url={episode.url}
              title={episode.title}
              subtitle={episode.subtitle}
              text={episode.text}
              key={episode.id}
              cardType="episode"
              isLiked={true}
            />
          );
        })}
      </Grid>
    );
  })();

  return <Fragment>{renderEpisodes}</Fragment>;
};

export default EpisodeLikes;
