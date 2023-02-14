import React from "react";
import styled from "styled-components";
import { MyCard } from "../components/ui/MyCard";

type Props = {};

const MyPage = (props: Props) => {
  return (
    <Container>
      <div className="title">마이페이지</div>
      <div className="category">
        <div>나의 카드</div>
        <div className="y-line"></div>
        <div>회원정보 수정</div>
      </div>
      <div className="line"></div>
      <div className="lists">
        <div className="user-name">소재헌님의 카드</div>
        <div className="cards">
          <span className="all">전체카드</span>
          <span className="credit">신용카드</span>
          <span className="check">체크카드</span>
        </div>
        <div className="list">
          <MyCard></MyCard>
          <div className="cancle">카드 신청 취소</div>
        </div>
      </div>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  margin: 0 auto;
  .title {
    width: 425px;
    margin: 0 auto;
    font-size: 25px;
    padding: 20px 0 40px;
  }
  .category {
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    color: var(--color-gray);
    /* height: 50px; */
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    div:first-child {
      color: var(--color-primary);
    }
    .y-line {
      border-right: 1px solid var(--color-lightgray);
      height: 40px;
    }
  }

  .line {
    height: 7px;
    background-color: var(--color-lightgray);
  }
  .lists {
    width: 425px;
    margin: 0 auto;
    padding-top: 20px;
  }
  .user-name {
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0;
  }
  .cards {
    color: var(--color-gray);
    margin-bottom: 20px;
    span {
      margin-right: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
    .all {
      color: var(--color-primary);
    }
  }
  .cancle {
    font-size: 14px;
    color: var(--color-gray);
    position: relative;
    top: -25px;
    left: 330px;
    cursor: pointer;
    :hover {
      color: var(--color-primary);
    }
  }
`;
