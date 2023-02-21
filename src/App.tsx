import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  const { token } = JSON.parse(localStorage.getItem("userInfo") || "{}");
  return token ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
