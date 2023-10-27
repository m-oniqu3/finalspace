"use client";

import FormError from "@/app/account/FormError";
import { validateEmail, validatePassword } from "@/app/account/validateForm";
import Container from "@/components/ui/Container";
import { createUser, signInUser } from "@/utils/auth";
import { notify } from "@/utils/notify";
import { useRouter } from "next/navigation";

import React, { Fragment, useEffect, useState } from "react";

const Form = () => {
  const router = useRouter();
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: { error: "", valid: false },
    password: { error: "", valid: false },
  });

  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    const { email, password } = formErrors;
    const { valid: emailValid } = email;
    const { valid: passwordValid } = password;

    if (emailValid && passwordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formErrors]);

  const handleAccount = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (showLoginForm) {
        signInUser(email, password)
          .then(() => {
            router.refresh();
            router.push("/characters");
            notify.welcome();
          })
          .catch((error) => {
            console.log(error);
            notify.error(error);
          });
      } else {
        createUser(email, password)
          .then(() => {
            router.refresh();
            router.push("/characters");
            notify.verify();
          })
          .catch((error) => {
            console.log(error);
            notify.error(error);
          });
      }
    } catch (error: any) {
      console.log(error);
      notify.error(error);
    }
  };

  const handleChangeForm = () => setShowLoginForm((state) => !state);

  return (
    <Container className="flex h-[80vh] justify-center items-center">
      <form className="w-[90%] flex flex-col gap-2 max-w-xs">
        <article className="py-4">
          <h1 className="font-bold text-3xl text-indigo-900 mb-2">{heading}</h1>

          <p className=" text-indigo-900">
            {text} &nbsp;
            <span className="hover:underline cursor-pointer font-normal" onClick={handleChangeForm}>
              {link}
            </span>
          </p>
        </article>

        <Fragment>
          <input
            type="email"
            placeholder="Email"
            className="input placeholder:text-indigo-900 text-indigo-900 w-full"
            value={email}
            onChange={handleEmail}
          />
          <FormError error={formErrors.email} />
        </Fragment>

        <Fragment>
          <input
            type="password"
            placeholder="Password"
            className="input placeholder:text-indigo-900 text-indigo-900 w-full"
            value={password}
            onChange={handlePassword}
          />
          <FormError error={formErrors.password} />
        </Fragment>

        <button
          onClick={handleAccount}
          className="submit disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={!isFormValid}
        >
          {button}
        </button>
      </form>
    </Container>
  );
};

export default Form;
