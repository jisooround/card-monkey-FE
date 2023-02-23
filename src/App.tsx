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
