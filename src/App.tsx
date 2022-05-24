import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Box, Button } from "@mui/material";

function App() {
  const handleShowModal = (message: string) => () => {
    alert(message);
  };
  return (
    <div className="App">
      <h1>React mambo jumbo</h1>
      <main className="App-header">
        <Box
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
            height: "60vh",
          }}
        >
          <InputForm />
          <Button variant="contained" onClick={handleShowModal("modal opened")}>
            Show modal
          </Button>
        </Box>
      </main>
    </div>
  );
}

export default App;
