import { notify } from "@/utils/notify";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const supabase = createClientComponentClient();

export const createUser = async (
  email: string,
  password: string,
  router: AppRouterInstance
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${location.origin}/auth/callback` },
  });

  if (error) throw error;

  if (data) {
    router.refresh();
    notify.verify();
  }
};

export const signInUser = async (
  email: string,
  password: string,
  router: AppRouterInstance
) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  if (data) {
    router.refresh();
    router.push("/characters");
    notify.welcome();
  }
};
