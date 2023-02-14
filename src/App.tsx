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
  return (
    <>
      <Header />
      <main style={{ marginBottom: "65px" }}>
        <Outlet />
      </main>
      <Navbar />
    </>
  );
};

export default App;
