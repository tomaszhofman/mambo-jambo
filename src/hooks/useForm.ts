import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Validate, validate } from "../utils/validator";

export type FormValueState = {
  readonly username: string;
};

export const useForm = () => {
  const [formValue, setFormValue] = useState<FormValueState>({
    username: "",
  });
  const [errors, setErrors] = useState<Validate>({
    username: "",
  });

  const isFormReadyToSubmit = Object.values(errors).some((el) => el.length > 0);

  useEffect(() => {
    setErrors(validate(formValue));
  }, [formValue]);

  const handleSubmit = (onSubmit: (data: FormValueState) => void) => {
    return (event: FormEvent<HTMLFormElement>) => {
      if (event && typeof event.preventDefault() === "function") {
        event.preventDefault();
      }
      onSubmit(formValue);
    };
  };

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const [key, value] = [event.target.name, event.target.value];
      setFormValue((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  return [
    formValue,
    handleInputChange,
    handleSubmit,
    errors,
    isFormReadyToSubmit,
  ] as const;
};
