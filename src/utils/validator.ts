import { FormValueState } from "../hooks/useForm";
import { SetStateAction } from "react";

export type Validate = Record<keyof FormValueState, string>;

export const validate = (values: FormValueState): Validate => {
  let errors: Validate = {
    username: "",
  };

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = "Username is to short";
  } else if (values.username.length > 20) {
    errors.username = "Username is to long";
  }
  return errors;
};
