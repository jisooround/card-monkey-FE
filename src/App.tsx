import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import { authCheck } from "./utils/cookie";
import throttle from "lodash.throttle";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    authCheck(pathname, navigate);
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

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar scroll={scroll} />
    </>
  );
};

export default App;
