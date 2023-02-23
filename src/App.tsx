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
import { SlArrowUp } from "react-icons/sl";
import throttle from "lodash.throttle";
import styled from "styled-components";

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
    } else {
      setScroll(false);
    }
  };

  return token ? (
    <>
      <Header />
      <Main>
        <Outlet />
        {scroll ? (
          <BtnTop
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="background"></div>
            <SlArrowUp size={30} className={"svg"} />
          </BtnTop>
        ) : (
          ""
        )}{" "}
      </Main>
      <Navbar />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const Main = styled.main`
  position: relative;
`;

const BtnTop = styled.div`
  position: fixed;
  right: 150px;
  bottom: 60px;
  height: 50px;
  width: 50px;
  transition: 0.5s;
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  color: var(--color-primary);
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export default App;
