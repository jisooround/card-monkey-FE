import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import { authCheck, getCookie } from "./utils/cookie";
import getTokenApi from "./api/monkeyGetToken";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const authCheck = () => {
  //   const token = getCookie();
  //   axios
  //     .get(`http://www.card-monkey.store/info/apply`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((result) => {
  //       // if (pathname === "/login" || pathname === "/signUp") {
  //       //   navigate(`/`);
  //       // }
  //       console.log("토큰확인");
  //     })
  //     .catch((error) => {
  //       console.log("토큰삭제");
  //       navigate(`/login`);
  //     });
  // };

  useEffect(() => {
    authCheck(pathname, navigate);
  });

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  );
};

export default App;
