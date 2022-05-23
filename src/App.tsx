import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputForm } from "./components/InputForm";

function App() {
  const handleShowModal = (message: string) => () => {
    alert(message);
  };
  return (
    <div className="App">
      <header className="App-header">
        <InputForm />
        <button onClick={handleShowModal("modal opened")}>Show modal</button>
      </header>
    </div>
  );
}

export default App;
