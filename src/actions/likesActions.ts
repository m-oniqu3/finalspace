"use server";

import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const supabase = createServerComponentClient<Database>({ cookies });

interface AddToDatabaseProps {
  table: "characters" | "locations" | "episodes";
  user: string;
  cardData: {
    id: string;
    title: string;
    subtitle: string;
    text: string;
    url: string;
    link: string;
  };
}

interface RemoveFromDatabaseProps {
  table: "characters" | "locations" | "episodes";
  id: string;
}

export async function addToDatabase({ table, user, cardData }: AddToDatabaseProps) {
  const id = parseInt(cardData.id.split("#")[1]).toString();

  try {
    const { error } = await supabase.from(table).insert([
      {
        user_id: user,
        card_id: id,
        title: cardData.title,
        subtitle: cardData.subtitle,
        text: cardData.text,
        url: cardData.url,
        link: cardData.link,
      },
    ]);

    revalidatePath("/likes");

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    return error;
  }
}

export async function removeFromDatabase({ table, id }: RemoveFromDatabaseProps) {
  const ID = parseInt(id.split("#")[1]);

  try {
    const { error } = await supabase.from(table).delete().eq("card_id", ID);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/likes");
  } catch (error) {
    console.log(error);
  }
}
