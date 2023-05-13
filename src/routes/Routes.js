import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collaborate from "../components/collaborate/Collaborate";
import Navbar from "../components/navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Collaborate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//this is the component that is being rendered