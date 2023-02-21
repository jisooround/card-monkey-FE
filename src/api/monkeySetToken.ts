import axios from "axios";

const { VITE_URL } = import.meta.env;

/**
 * api테스트를 못해서 token설정못했음
 */

// function setItemWithExpireTime(value: Array<string>, expireTime: number) {
//   const object = {
//     value: JSON.stringify(value),
//     expire: Date.now() + expireTime,
//   };

//   window.localStorage.setItem("userInfo", JSON.stringify(object));
// }

// function getItemWithExpireTime() {
//   const objectParse = JSON.parse(localStorage.getItem("userInfo"));

//   if (!objectParse) {
//     return "확인 가능한 회원정보가 없습니다.";
//   }

//   if (Date.now() > objectParse.expire) {
//     window.localStorage.removeItem("userInfo");
//     return "로그인 시간 만료";
//   }

//   return JSON.parse(objectParse.value);
// }
// getItemWithExpireTime();

class MonkeySetToken {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: VITE_URL,
      headers: { "Content-Type": "application/json" },
    });
  }

  /** 회원가입 */
  async signUp({ userId, password, name, benefit }: signType) {
    return this.axiosInstance
      .post("/signup", {
        userId: userId,
        password: password,
        name: name,
        benefit: benefit,
      })
      .then((result) => {
        console.log(result);
        return result;
      })
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
        const res = result.data;
        // setItemWithExpireTime(res, 5000);
        localStorage.setItem("userInfo", JSON.stringify(res));
        return res;
      })
      .catch((error) => console.log(error));
  }
}

const setTokenApi = new MonkeySetToken();

export default setTokenApi;
