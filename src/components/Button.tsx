import { Database } from "@/lib/database.types";
import { notify } from "@/utils/notify";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Button = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = () => {
    supabase.auth
      .signOut()
      .then(() => {
        router.push("/");
        router.refresh();
      })
      .catch((error: any) => {
        console.log(error);
        notify.error(error.message);
      });
  };
  return (
    <button
      onClick={handleSignOut}
      className="font-light rounded-md bg-indigo-200 py-1.5 px-5 border border-indigo-300 min-w-fit hover:border-indigo-500 hover:bg-indigo-300  transition duration-300 ease-in-out"
    >
      Logout
    </button>
  );
};

export default Button;
