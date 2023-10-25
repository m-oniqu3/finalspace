"use client";

import { Database } from "@/lib/database.types";
import { notify } from "@/utils/notify";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Avatar from "react-avatar";

interface Props {
  closeDialog: () => void;
  user: string;
}

const Logout = (props: Props) => {
  const { closeDialog, user } = props;
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.log(error);
      notify.error(error.message);
    }
  };

  useEffect(() => {
    function closeDialogOnResize() {
      window.addEventListener("resize", closeDialog);
    }

    closeDialogOnResize();

    return () => window.removeEventListener("resize", closeDialog);
  }, [closeDialog]);

  return (
    <dialog className="fixed top-20 w-52 m-0 right-10 ml-auto z-20 block p-3 rounded-md border border-indigo-200 shadow-sm">
      <XMarkIcon className="h-4 w-4  cursor-pointer absolute top-2 right-2" onClick={closeDialog} />

      <div className="grid grid-cols-[40px,1fr] gap-2 pb-2 border-b-[1px] border-slate-200 ">
        {!user ? (
          <UserCircleIcon className="h-9 w-9 text-slate-400 cursor-pointer" />
        ) : (
          <Avatar name={user} size="36" round={true} color="rgb(165 180 252)" fgColor="white" />
        )}
        <div className="text-sm ">
          <p className="font-normal">{user ? user.split("@")[0] : "Guest"}</p>
          <p className="relative -top-1">{user ? "@" + user.split("@")[1] : "Login"}</p>
        </div>
      </div>

      <div className="mt-2 w-full text-sm flex flex-col">
        <Link
          href="/likes/characters"
          className="w-full px-2 py-[7px]  hover:bg-indigo-200 hover:rounded-md transition-all duration-300 ease-in-out"
        >
          Your Likes
        </Link>
        <button
          onClick={handleSignOut}
          className="w-full px-2 py-[7px]  hover:bg-indigo-200 hover:rounded-md transition-all duration-300 ease-in-out text-left
      "
        >
          Logout
        </button>
      </div>
    </dialog>
  );
};

export default Logout;
