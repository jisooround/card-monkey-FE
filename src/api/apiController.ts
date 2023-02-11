import axios from "axios";

const instance = axios.create({
  baseURL: "https://973a7445-42af-40b4-a0ad-0f4b3f55b021.mock.pstmn.io",
});

instance.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken",
    )}`;
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
