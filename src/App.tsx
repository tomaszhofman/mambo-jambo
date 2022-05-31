import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routing";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path={routes.Contact} element={<Contact />}></Route>
      <Route index element={<Home />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
