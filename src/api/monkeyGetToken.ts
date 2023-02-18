import axios from "axios";
import instance from "./apiController";
import favorList from "../mokeup/favorList.json";
import cardDetail from "../mokeup/cardDetail.json";
import suggestList from "../mokeup/suggestList.json";
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
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  /**신청한 카드 내역 */
  async cardList() {
    return this.instance
      .get("/paid/fastcampus3")
      .then((result) => result.data)
      .catch((error) => {
        return favorList;
        console.log(error);
      });
  }

  /**인기 top3카드 */
  async hot3() {
    return this.instance
      .get("/card/rank")
      .then((result) => result)
      .catch((error) => {
        return favorList;
        console.log(error);
      });
  }

  /**추천 카드 */
  async recommend() {
    return this.instance
      .get("/card/suggest/fastcampus3")
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**관심혜택 맞춤 카드 */
  async benefitCard(benefit: string) {
    return this.instance
      .get(`/card/benefit/fastcampus3?search=${benefit}`)
      .then((result) => result.data)
      .catch((error) => suggestList);
  }

  /**카드명으로 검색 */
  async searchByName(name: string) {
    return this.instance
      .get(`/card?name=${name}`)
      .then((result) => result)
      .catch((error) => error);
  }

  //**카드회사명으로 검색 */
  async searchByCompany(company: string) {
    return this.instance
      .get(`/card?company=${company}`)
      .then((result) => result)
      .catch((error) => error);
  }

  //**카드혜택으로 검색 */
  async searchByBenefit(benefit: string) {
    return this.instance
      .get(`/card?benefit=${benefit}`)
      .then((result) => result)
      .catch((error) => error);
  }

  /**전체카드 조회 */
  async allCard() {
    return this.instance
      .get(`/card`)
      .then((result) => result)
      .catch((error) => error);
  }

  /**카드 상세정보 조회 */
  async cardDetail(id: string) {
    return this.instance
      .get(`/card/${id}`)
      .then((result) => result)
      .catch((error) => {
        console.log(error);
        return cardDetail;
      });
  }

  /**카드 신청 */
  async cardApplication(id: string) {
    return this.instance
      .post(`/card/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => console.log(result))
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
      .get(`/card/${id}/review`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
        return getReview;
      });
  }

  /**리뷰 선택(이모저모) */
  async selectReview(id: number) {
    return this.instance
      .post(`/card/${id}/review`, {
        headers: { "Content-Type": "application/json" },
        data: {},
      })
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**비밀번호 변경 */
  async changePassword() {
    return this.instance
      .post(`/changePassword/fastcampus3`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**혜택 변경 */
  async changeBenefit() {
    return this.instance
      .patch(`/changeBenefit/fastcampus3`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**회원 탈퇴 */
  async withdrawal() {
    return this.instance
      .delete(`/fastcampus3`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**나의 관심상품 */
  async myFavor() {
    return this.instance
      .get(`/card/favor/fastcampus3`)
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
        return favorList;
      });
  }

  /**신청한 카드 취소*/
  async deleteCard(id: string) {
    return this.instance
      .delete(`/paid/${id}`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**찜하기 취소(관심상품) */
  async deleteFavor(id: number) {
    return this.instance
      .post(`/card/${id}/favor`)
      .then((result) => result.data)
      .catch((error) => {
        return "찜하기 취소 완료(에러)";
      });
  }

  /**찜하기 or 찜하기 취소 */
  async toggleFavor(id: number) {
    return this.instance
      .post(`/card/${id}/favor`)
      .then((result) => result.data)
      .catch((error) => {
        return "에러";
      });
  }
}

const getTokenApi = new MonkeyGetToken();

export default getTokenApi;
