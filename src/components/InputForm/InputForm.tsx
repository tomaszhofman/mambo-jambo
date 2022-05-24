import React from "react";
import { FormValueState, useForm } from "../../hooks/useForm";

const InputForm = () => {
  const [formValue, handleInputChange, handleSubmit, errors] = useForm();

  const isFormReadyToSubmit = Object.values(errors).some((el) => el.length > 0);

  const onFormSubmit = (data: FormValueState) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          name={"username"}
          value={formValue.username}
          onChange={handleInputChange}
        />
        {isFormReadyToSubmit && (
          <p style={{ color: "red" }}>{errors.username}</p>
        )}
        <button disabled={isFormReadyToSubmit} type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
};

export { InputForm };
