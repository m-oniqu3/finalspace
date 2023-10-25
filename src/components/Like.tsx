"use client";

import { addToDatabase, removeFromDatabase } from "@/actions/likesActions";
import { getCurrentSession } from "@/utils/auth";
import { HeartIcon } from "@heroicons/react/24/solid";
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
  const [liked, setLiked] = useState<boolean>(props.isLiked);
  const router = useRouter();

  const { cardData, cardType } = props;

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

    if (!user) router.replace("/account");

    if (!liked) {
      const { error } = await addToDatabase({ table, user, cardData });

      if (error) {
        toast.message("Error adding to favourites", {
          description: "We couldn't add this to your favourites. Please try again later.",
        });
      }
    } else if (liked) {
      toast.promise(removeFromDatabase({ table, id: cardData.id }), {
        loading: "Removing from likes",
        success: () => "Successfully removed!",
        error: "Could not remove from likes.",
        position: "bottom-right",
      });
    }
  };

  return (
    <div onClick={handleLike} key={cardData.id}>
      <HeartIcon className={`h-7 w-7  ${liked ? "text-indigo-900" : "text-indigo-300"}`} />
    </div>
  );
};

export default Like;
