import React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
  const handleShowModal = (message: string) => () => {
    alert(message);
  };
  return (
    <div>
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
            <Button
              variant="contained"
              onClick={handleShowModal("modal opened")}
            >
              Show modal
            </Button>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Home;
