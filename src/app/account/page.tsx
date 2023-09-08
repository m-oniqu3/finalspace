"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Account = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(true);

  const formState = {
    heading: isLogged ? "Sign In" : "Create Account",
    text: isLogged
      ? "New to Final Space? Get started by creating an account."
      : "Welcome to Final Space. Already have an account? ",
    link: isLogged ? "Create Account" : "Sign in",
    button: isLogged ? "Sign In" : "Create Account",
  };

  const { heading, text, link, button } = formState;

  const handleAccount = () => {
    router.push("/characters");
  };

  const handleChangeForm = () => setIsLogged((state) => !state);

  return (
    <div className="bg-indigo-100 h-screen">
      <nav className="h-[10vh] flex items-center">
        <Container>
          <Image
            src="/logo.png"
            alt="final space logo"
            width={70}
            height={70}
            className=""
          />
        </Container>
      </nav>

      <Container className="flex h-[90vh] justify-center items-center">
        <form className="w-[90%] flex flex-col gap-4 max-w-xs">
          <article className="py-4">
            <h1 className="font-bold text-3xl text-indigo-800 mb-2">
              {heading}
            </h1>

            <p className=" text-indigo-800">
              {text} &nbsp;
              <span
                className="hover:underline cursor-pointer font-normal"
                onClick={handleChangeForm}
              >
                {link}
              </span>
            </p>
          </article>

          <input
            type="text"
            placeholder="Username"
            className="bg-transparent border border-indigo-400 rounded-md py-[.4rem] px-[1.2rem] placeholder:text-indigo-400 text-indigo-500"
          ></input>

          <input
            type="password"
            placeholder="Password"
            className=" bg-transparent border border-indigo-400 rounded-md py-[.4rem] px-[1.2rem] placeholder:text-indigo-400 text-indigo-500"
          ></input>

          <button
            onClick={handleAccount}
            className="rounded-md font-medium border border-indigo-400 bg-indigo-500 text-indigo-100 py-[.4rem] px-[1.2rem]
            hover:bg-indigo-800 transition duration-300 ease-in-out
          "
          >
            {button}
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Account;
