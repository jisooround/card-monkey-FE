import axios from "axios";

const { VITE_URL } = import.meta.env;

/**
 * api테스트를 못해서 token설정못했음
 */

type signType = {
  id: string;
  password: string;
  name: string;
};

class MonkeySetToken {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: VITE_URL,
      headers: { "Content-Type": "application/json" },
    });
  }

  /** 회원가입 */
  async signUp({ id, password, name }: signType) {
    return this.axiosInstance
      .post("/signup", {
        id: id,
        password: password,
        name: name,
      })
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /** 로그인 */
  async signIn({ id, password }: signType) {
    return this.axiosInstance
      .post("/login", {
        id: id,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("accessToken", result.data.token);
        localStorage.setItem("name", result.data.name);
        return result.data;
      })
      .catch((error) => console.log(error));
  }
}

const setTokenApi = new MonkeySetToken();

export default setTokenApi;
