"use client";

import { Database } from "@/lib/database.types";
import { getCurrentSession } from "@/utils/auth";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  cardData: {
    id: string;
    title: string;
    subtitle: string;
    text: string;
    url: string;
    link: string;
  };
  cardType: "character" | "location" | "episode";
  isLiked: boolean;
}

const Like = (props: Props) => {
  const [user, setUserId] = useState<string>("");
  const supabase = createClientComponentClient<Database>();
  const [liked, setLiked] = useState<boolean>(props.isLiked);
  const router = useRouter();

  const { cardData, cardType } = props;
  const classes = liked ? "text-indigo-900" : "text-indigo-300";

  const table = (() => {
    switch (cardType) {
      case "character":
        return "characters";
      case "location":
        return "locations";
      case "episode":
        return "episodes";
      default:
        return "characters";
    }
  })();

  useEffect(() => {
    getCurrentSession().then((session) => {
      if (session) {
        setUserId(session.user.id);
      }
    });
  }, []);

  const handleLike = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLiked((state) => !state);

    try {
      if (user) {
        if (liked) {
          // delete record

          const { error } = await supabase
            .from(table)
            .delete()
            .eq("card_id", +cardData.id.split("#")[1]);

          if (error) {
            throw error;
          }

          toast.message("Unliked!", {
            description: `Removed ${cardData.title} from your liked ${cardType}s.`,
            position: "bottom-right",
          });
        } else {
          const { data, error } = await supabase
            .from(table)
            .insert([
              {
                user_id: user,
                card_id: +cardData.id.split("#")[1],
                title: cardData.title,
                subtitle: cardData.subtitle,
                text: cardData.text,
                url: cardData.url,
                link: cardData.link,
              },
            ])
            .select()
            .single();

          if (error) {
            throw error;
          }

          if (data.id) {
            console.log(data);
            toast.message("Liked!", {
              description: `Added ${cardData.title} to your liked ${cardType}s.`,
              position: "bottom-right",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handleLike}>
      <HeartIcon className={`h-7 w-7  ${classes}`} />
    </div>
  );
};

export default Like;
