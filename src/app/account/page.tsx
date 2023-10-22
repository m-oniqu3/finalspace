"use client";

import { validateEmail, validatePassword } from "@/app/account/validateForm";
import Container from "@/components/ui/Container";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Account = () => {
  const router = useRouter();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: { error: "", valid: false },
    password: { error: "", valid: false },
  });

  const formState = {
    heading: showLoginForm ? "Sign In" : "Create Account",
    text: showLoginForm
      ? "New to Final Space? Get started by creating an account."
      : "Welcome to Final Space. Already have an account? ",
    link: showLoginForm ? "Create Account" : "Sign in",
    button: showLoginForm ? "Sign In" : "Create Account",
  };

  const { heading, text, link, button } = formState;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    const results = validateEmail(e.target.value);
    setFormErrors((state) => ({ ...state, email: results }));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    const results = validatePassword(e.target.value);
    setFormErrors((state) => ({ ...state, password: results }));
  };

  const handleAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // router.push("/characters");
  };

  const handleChangeForm = () => setShowLoginForm((state) => !state);

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
            <h1 className="font-bold text-3xl text-indigo-900 mb-2">
              {heading}
            </h1>

            <p className=" text-indigo-900">
              {text} &nbsp;
              <span
                className="hover:underline cursor-pointer font-normal"
                onClick={handleChangeForm}
              >
                {link}
              </span>
            </p>
          </article>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="input placeholder:text-indigo-900 text-indigo-500 w-full"
              value={email}
              onChange={handleEmail}
            />
            {
              <p className="mt-1 h-5">
                {formErrors.email.error}{" "}
                {formErrors.email.valid && (
                  <CheckCircleIcon className="h-5 w-5 text-indigo-900" />
                )}{" "}
              </p>
            }
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className=" input placeholder:text-indigo-900 text-indigo-500 w-full"
              value={password}
              onChange={handlePassword}
            />
            {
              <p className="mt-1 h-5">
                {formErrors.password.error}
                {formErrors.password.valid && (
                  <CheckCircleIcon className="h-5 w-5 text-indigo-900" />
                )}
              </p>
            }
          </div>

          <button onClick={handleAccount} className="submit">
            {button}
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Account;
