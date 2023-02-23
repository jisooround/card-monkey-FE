import { Cookies } from "react-cookie";
import axios from "axios";

const cookies = new Cookies();

export const setCookie = (token: string) => {
  return cookies.set("token", token, {
    path: "/",
    maxAge: 180,
  });
};

export const getCookie = () => {
  const token = cookies.get("token");
  return token;
};

export const deleteCookie = () => {
  const token = cookies.get("token");
  return token;
};

export const authCheck = (pathname: string, navigate: any) => {
  const token = getCookie();
  axios
    .get(`http://www.card-monkey.store/info/apply`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((result) => {
      if (pathname === "/login" || pathname === "/signup") {
        navigate(`/`);
      }
      console.log("토큰확인");
    })
    .catch((error) => {
      console.log("토큰삭제");
      navigate(`/login`);
    });
};
