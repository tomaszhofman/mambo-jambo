import React, { useEffect, useState } from "react";

interface InputFormProps {}

const InputForm = (props?: InputFormProps) => {
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formReadyToSubmit = displayError || !inputValue;

  const handleSubmitForm = () => {
    window.localStorage.setItem("inputValue", JSON.stringify(inputValue));
  };

  useEffect(() => {
    const inputValueFromStorage = window.localStorage.getItem(
      JSON.parse("inputValue")
    );

    console.log(inputValueFromStorage);

    // if (Boolean(inputValueFromStorage)) {
    //   setInputValue(inputValueFromStorage);
    // }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const messageLength = event.target.value.length;
    setInputValue(event.target.value);
    if (messageLength < 3 || messageLength > 20) {
      if (messageLength < 3) {
        setErrorMessage("User name to short");
      }
      if (messageLength > 20) {
        setErrorMessage("User name to long");
      }
      setDisplayError(true);
    } else {
      setDisplayError(false);
    }
  };
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} type="text" />
      {displayError && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button onClick={handleSubmitForm} disabled={formReadyToSubmit}>
        submit data
      </button>
    </div>
  );
};

export { InputForm };
