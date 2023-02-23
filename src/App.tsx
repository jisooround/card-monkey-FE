import React, { useState, useEffect } from "react";
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
import throttle from "lodash.throttle";

const App = () => {
  const [scroll, setScroll] = useState(false);
  const { token } = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const navigete = useNavigate();
  useEffect(() => {
    if (!token) navigete("/login", { replace: true });
  });

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 20));
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };

  return token ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar scroll={scroll} />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
