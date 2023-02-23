import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import { authCheck } from "./utils/cookie";
import { SlArrowUp } from "react-icons/sl";
import throttle from "lodash.throttle";
import styled from "styled-components";

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
    } else {
      setScroll(false);
    }
  };

  return (
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
