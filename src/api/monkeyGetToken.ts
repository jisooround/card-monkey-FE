import axios from "axios";
import instance from "./apiController";
import favorList from "../mokeup/favorList.json";
import cardDetail from "../mokeup/cardDetail.json";
import suggestList from "../mokeup/suggestList.json";
import benefitByCoffee from "../mokeup/benefitByCoffee.json";
import benefitByMovie from "../mokeup/benefitByMovie.json";
import benefitByPhone from "../mokeup/benefitByPhone.json";
import searchLotte from "../mokeup/searchLotte.json";
import searchSamsung from "../mokeup/searchSamsung.json";
import searchShinhan from "../mokeup/searchShinhan.json";
import searchWoori from "../mokeup/searchWoori.json";
import getReview from "../mokeup/getReview.json";

class MonkeyGetToken {
  instance;

  constructor() {
    this.instance = instance;
  }

  /** 로그아웃 */
  async signOut() {
    return this.instance
      .post("/logout")
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  }

  /**신청한 카드 내역 */
  async cardList(userId: string) {
    return this.instance
      .get(`/paid/${userId}`)
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
      });
  }

  /**인기 top3카드 */
  async hot3() {
    return this.instance
      .get("/card/rank")
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
      });
  }

  /**관심혜택 맞춤 카드 */
  async benefitCard(userId: string) {
    return this.instance
      .get(`/card/benefit/${userId}`)
      .then((result) => result.data)
      .catch((error) => error);
  }

  /**카드명으로 검색 */
  async searchByName(name: string) {
    return this.instance
      .get(`/card/name?search=${name}`)
      .then((result) => result.data)
      .catch((error) => error);
  }

  //**카드회사명으로 검색 */
  async searchByCompany(company: string) {
    return this.instance
      .get(`/card/company?search=${company}`)
      .then((result) => result.data)
      .catch((error) => error);
  }

  //**카드혜택으로 검색 */
  async searchByBenefit(benefit: string) {
    return this.instance
      .get(`/card/benefit?search=${benefit}`)
      .then((result) => result.data)
      .catch((error) => error);
  }

  /**전체카드 조회 */
  async allCard() {
    return this.instance
      .get(`/card`)
      .then((result) => result.data)
      .catch((error) => error);
  }

  /**카드 상세정보 조회 */
  async cardDetail(id: string) {
    return this.instance
      .get(`/card/${id}`)
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
        return cardDetail;
      });
  }

  /**카드 신청 */
  async cardApplication(id: number) {
    return this.instance
      .post(`/card/apply/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => console.log(result.data))
      .catch((error) => {
        console.log(error);
      });
  }

  /**찜하기(관심상품) */
  async favorCheck(id: number) {
    return this.instance
      .post(`/card/${id}/favor`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**리뷰 조회(이모저모) */
  async getReview(id: number) {
    return this.instance
      .get(`/card/review/${id}`)
      .then((result) => {
        console.log("api", result.data);
        return result.data;
      })
      .catch((error) => {
        console.log(error);
        return getReview;
      });
  }

  /**리뷰 선택(이모저모) */
  async selectReview(id: number, message: string[]) {
    return this.instance
      .post(`/card/review/${id}`, { id: id, message: message })
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**비밀번호 변경 */
  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ) {
    return this.instance
      .post(`/changePassword/${userId}`, {
        currentPassword: currentPassword,
        newPassword: newPassword,
      })
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
      });
  }

  /**회원 탈퇴 */
  async withdrawal(userId: string) {
    return this.instance
      .delete(`deleteAccount/${userId}`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**나의 관심상품 */
  async myFavor(userId: string) {
    return this.instance
      .get(`/card/favor/${userId}`)
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
        return favorList;
      });
  }

  /**신청한 카드 취소*/
  async deleteCard(id: number) {
    return this.instance
      .delete(`/paid/${id}`)
      .then((result) => result.data)
      .catch((error) => {
        console.log("카드 취소 에러", error);
      });
  }

  /**찜하기 or 찜하기 취소 */
  async toggleFavor(id: number) {
    return this.instance
      .post(`/card/favor/${id}`)
      .then((result) => result.data)
      .catch((error) => {
        return "에러";
      });
  }
}

const getTokenApi = new MonkeyGetToken();

export default getTokenApi;
