import axios from "axios";
import instance from "./apiController";

class MonkeyGetToken {
  instance;

  constructor() {
    this.instance = instance;
  }

  /** 로그아웃 */
  async signOut() {
    return this.instance
      .post("/logout")
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**신청한 카드 내역 */
  async cardList() {
    return this.instance
      .get("/paid/fastcampus3")
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**인기 top3카드 */
  async hot3() {
    return this.instance
      .get("/card/rank")
      .then((result) => console.log(result))
      .catch((error) => {
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
  async benefitCard() {
    return this.instance
      .get("/card/benefit/fastcampus3")
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**카드명으로 검색 */
  async searchByName(name: string) {
    return this.instance
      .get(`/card?name=${name}`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  //**카드회사명으로 검색 */
  async searchByCompany(company: string) {
    return this.instance
      .get(`/card?company=${company}`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**전체카드 조회 */
  async allCard() {
    return this.instance
      .get(`/card`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**카드 상세정보 조회 */
  async cardDetail(id: string) {
    return this.instance
      .get(`/card/${id}`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
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
  async favorCheck(id: string) {
    return this.instance
      .post(`/card/${id}/favor`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**리뷰 조회(이모저모) */
  async getReview(id: string) {
    return this.instance
      .get(`/card/${id}/review`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }

  /**리뷰 선택(이모저모) */
  async selectReview(id: string) {
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
      .get("/favor/fastcampus3")
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
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
  /**나의 관심카드, 나의 관심상품이 무슨차이인지 모르겠음.. */

  /**찜하기 취소(관심상품) */
  async deleteFavor(id: string) {
    return this.instance
      .post(`/card/${id}/favor`)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  }
}

const getTokenApi = new MonkeyGetToken();

export default getTokenApi;
