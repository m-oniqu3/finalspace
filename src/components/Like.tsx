"use client";

import { useFavouriteContext } from "@/contexts/FavouritesContext";
import { ActionTypes } from "@/contexts/reducer";
import { Database } from "@/lib/database.types";
import { getCurrentSession } from "@/utils/auth";
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
  const { dispatch } = useFavouriteContext();

  const { cardData, cardType } = props;
  const classes = liked ? "text-indigo-900" : "text-indigo-300";
  const id = parseInt(cardData.id.split("#")[1]).toString();

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

  const action: ActionTypes = (() => {
    switch (cardType) {
      case "character":
        return ActionTypes.add_to_characters;
      default:
        return ActionTypes.add_to_characters;
    }
  })();

  useEffect(() => {
    getCurrentSession().then((session) => {
      if (session) {
        setUserId(session.user.id);
      }
    });
  }, []);

  const addToDatabase = () => {
    supabase
      .from(table)
      .insert([
        {
          user_id: user,
          card_id: id,
          title: cardData.title,
          subtitle: cardData.subtitle,
          text: cardData.text,
          url: cardData.url,
          link: cardData.link,
        },
      ])
      .then(null, (error) => {
        console.log(error);
        toast.message("Something went wrong", {
          description: "We couldn't add this character to your favourites.",
        });
      });

    // revalidatePath("/likes");
  };

  const removeFromDatabase = () => {
    supabase
      .from(table)
      .delete()
      .eq("card_id", id)
      .then(null, (error) => {
        console.log(error);
        toast.message("Something went wrong", {
          description: "We couldn't remove this character from your favourites.",
        });
      });

    // router.refresh();
  };

  const handleLike = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLiked((state) => !state);

    if (!user) return;
    const created_at = Date.now();

    dispatch({ type: action, payload: { ...cardData, id, created_at } });

    if (!liked) addToDatabase();
    if (liked) removeFromDatabase();
  };

  return (
    <div onClick={handleLike}>
      <HeartIcon className={`h-7 w-7  ${classes}`} />
    </div>
  );
};

export default Like;
