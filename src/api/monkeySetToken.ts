import axios from "axios";

let { KEY };
/**
 * api테스트를 못해서 token설정못했음
 */

class MonkeySetToken {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://973a7445-42af-40b4-a0ad-0f4b3f55b021.mock.pstmn.io",
      headers: { "Content-Type: application/json" },
    });
  }

  /** 회원가입 */
  async signUp({ id, password, name }) {
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
  async signIn({ id, password }) {
    return this.axiosInstance
      .post("/login", {
        id: id,
        password: password,
      })
      .then((result) => {
        console.log(result);
        // localStorage.setItem('accessToken',);
      })
      .catch((error) => console.log(error));
  }
}

export default MonkeySetToken;
