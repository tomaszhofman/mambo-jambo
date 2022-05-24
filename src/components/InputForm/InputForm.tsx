import React from "react";
import { FormValueState, useForm } from "../../hooks/useForm";
import { Box, Button, TextField } from "@mui/material";

const InputForm = () => {
  const [
    formValue,
    handleInputChange,
    handleSubmit,
    errors,
    isFormReadyToSubmit,
  ] = useForm();

  const onFormSubmit = (data: FormValueState) => {
    // window.localStorage.setItem("username", JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Box
        sx={{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          gap: "10px",
        }}
      >
        <TextField
          error={isFormReadyToSubmit}
          label="Username"
          name={"username"}
          helperText={errors.username}
          value={formValue.username}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          disabled={isFormReadyToSubmit}
          type="submit"
        >
          Submit form
        </Button>
      </Box>
    </form>
  );
};

export { InputForm };
