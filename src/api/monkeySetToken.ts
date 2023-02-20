import axios from "axios";
import { signType, loginType } from "../types/types";

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
  async signIn({ id, password }: loginType) {
    return this.axiosInstance
      .post("/login", {
        id: id,
        password: password,
      })
      .then((result) => {
        const { token } = result.data;
        // console.log(token);
        return token;
      })
      .catch((error) => console.log(error));
  }
}

const setTokenApi = new MonkeySetToken();

export default setTokenApi;
