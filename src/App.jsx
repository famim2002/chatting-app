import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ChatBox from "./pages/ChatBox";
import Layout from "./componenets/layout/Index";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/chatbox" element={<ChatBox />} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
