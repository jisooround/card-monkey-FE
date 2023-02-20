import axios from "axios";

const { VITE_TOKEN, VITE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_URL,
});

instance.interceptors.request.use(
  function (config) {
    const { token } = JSON.parse(localStorage.getItem("userInfo") || "{}");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    console.log("응답완료");
    return response;
  },
  function (error) {
    console.log("오류 응답");
    return Promise.reject(error);
  },
);

export default instance;
