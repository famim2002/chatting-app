import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
