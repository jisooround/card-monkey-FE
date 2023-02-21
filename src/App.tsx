import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  const { token } = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const navigete = useNavigate();
  useEffect(() => {
    if (!token) navigete("/login", { replace: true });
  });

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
