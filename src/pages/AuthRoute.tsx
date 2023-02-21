import React, { useEffect } from "react";
import { useNavigate } from "react-router";

type Props = {};

const AuthRoute = (props: Props) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("hi");
    if (token) navigate("/");
  });
  return <div>AuthRoute</div>;
};

export default AuthRoute;
