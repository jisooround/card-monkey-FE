import axios from "axios";

const instance = axios.create({
  baseURL: "https://e72cd870-8213-4c6d-b139-4bc29cce67ec.mock.pstmn.io",
});

instance.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJleGFtcGxlQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk1Mzk2MiwiZXhwIjoxNjc2MDQwMzYyLCJpZCI6ImFzZGYiLCJuaWNrbmFtZSI6ImtpbSIsInJvbGUiOiJST0xFX1VTRVIifQ.ElD5G1XSi5iXq0uUSc6b-8sq1KU7fUq6beYY7Fimmaw";
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
