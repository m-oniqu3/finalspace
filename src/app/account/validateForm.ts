//pattern to validate email address
const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (email: string) => {
  const errors = { error: "", valid: false };

  //if email is empty
  if (email === "" || email.length === 0)
    return { ...errors, error: "Email is required", valid: false };
  //if email is not valid
  else if (email !== "" && !String(email).match(pattern))
    return { ...errors, error: "Email is not valid", valid: false };

  //if all fields are valid
  return { ...errors, valid: true };
};

export const validatePassword = (password: string) => {
  const errors = { error: "", valid: false };

  //if password is less than 6 characters
  if (password !== "" && password.length < 6) {
    const message = "Password must be at least 6 characters";
    return { ...errors, error: message, valid: false };
  }

  //if password is empty
  else if (password === "" || password.length === 0)
    return { ...errors, error: "Password is required", valid: false };

  //if all fields are valid
  return { ...errors, valid: true };
};
