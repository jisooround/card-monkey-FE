import axios from "axios";

const { VITE_URL } = import.meta.env;

/**
 * api테스트를 못해서 token설정못했음
 */

class MonkeySetToken {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: VITE_URL,
      headers: { "Content-Type": "application/json" },
    });
  }

  /** 회원가입 */
  async signUp({ userId, password, name }: signType) {
    return this.axiosInstance
      .post("/signup", {
        userId: userId,
        password: password,
        name: name,
      })
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /** 로그인 */
  async signIn({ userId, password }: loginType) {
    return this.axiosInstance
      .post("/login", {
        userId: userId,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("result", JSON.stringify(result.data));
        return result.data;
      })
      .catch((error) => console.log(error));
  }
}

const setTokenApi = new MonkeySetToken();

export default setTokenApi;
