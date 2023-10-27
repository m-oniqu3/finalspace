import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const supabase = createClientComponentClient<Database>();

export const createUser = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });

    if (error) throw new Error(error.message);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCurrentSession = async () => {
  const { data } = await supabase.auth.getSession();

  if (!data || !data.session) return null;
  return data.session;
};
