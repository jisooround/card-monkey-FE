import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import { CardLists } from "../components/mypage/CardLists";
import { EditAccount } from "../components/mypage/EditAccount";
import { MyCards } from "../components/ui/MyCard";
import { CardType, Empty } from "./MainPage";

type Props = {};

const MyPage = (props: Props) => {
  const [section, setSection] = useState("card-lists");

  const changeSection = (event: any) => {
    setSection(event.target.className);
  };

  return (
    <Container>
      <div className="title">
        <img src="../monkey_yellow.png" />
        <div className="text">마이페이지</div>
      </div>
      <div className="category">
        <div
          className="card-lists"
          id={section === "card-lists" ? "primary" : "basic"}
          onClick={changeSection}
        >
          나의 카드
        </div>
        <div className="y-line"></div>
        <div
          className="edit-account"
          id={section === "edit-account" ? "primary" : "basic"}
          onClick={changeSection}
        >
          회원정보 수정
        </div>
      </div>
      <div className="line"></div>
      {section === "card-lists" ? <CardLists /> : <EditAccount />}
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 90px;
  #primary {
    color: var(--color-primary);
  }
  #basic {
    color: var(--color-gray);
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 25px;
    padding: 10px 0 35px;
    .text {
      padding-top: 15px;
    }
    img {
      width: 100px;
    }
  }
  .category {
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    .y-line {
      border-right: 1px solid var(--color-lightgray);
      height: 40px;
    }
  }

  .line {
    height: 7px;
    background-color: var(--color-lightgray);
  }
  .myaccount {
    display: flex;
    flex-direction: column;
    width: 425px;
    margin: 0 auto;
    padding-top: 20px;
    .delete {
      align-self: flex-end;
      font-size: 14px;
      color: var(--color-gray);
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: var(--color-primary);
      }
    }
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
      &:hover {
        color: var(--color-primary);
      }
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
  .inputWrap {
    padding-top: 50px;
    padding-bottom: 93px;
    width: 100%;
    font-size: 14px;
    .group {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      align-items: center;
      border-bottom: 1px solid var(--color-gray);
      .inputTitle {
        width: 30%;
        font-weight: 600;
        padding-right: 20px;
      }
      input {
        width: 100%;
        height: 30px;
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
  }
`;
