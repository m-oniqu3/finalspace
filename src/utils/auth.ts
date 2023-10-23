import { Database } from "@/lib/database.types";
import { notify } from "@/utils/notify";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const supabase = createClientComponentClient<Database>();

export const createUser = async (
  email: string,
  password: string,
  router: AppRouterInstance
) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });

    if (error) throw new Error(error.message);

    if (data) {
      router.refresh();
      notify.verify();
    }
  } catch (error) {
    notify.error(error);
  }
};

export const signInUser = async (
  email: string,
  password: string,
  router: AppRouterInstance
) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    if (data) {
      router.refresh();
      router.push("/characters");
      notify.welcome();
    }
  } catch (error: any) {
    notify.error(error);
  }
};

export const getCurrentSession = async () => {
  const { data } = await supabase.auth.getSession();

  if (!data || !data.session) return null;
  return data.session;
};
