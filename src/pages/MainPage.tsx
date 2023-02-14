import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import { MyCard } from "../components/ui/MyCard";

type Props = {};

const MainPage = (props: Props) => {
  const [topCard, setTopCard] = useState();

  useEffect(() => {
    const topList = getTokenApi.hot3();
    console.log("inner", topList);
  }, []);
  console.log("main", topCard);

  return (
    <Container>
      <div className="title">
        <span className="mycard">나의 카드</span>
        <Link to="/mypage" style={{ textDecoration: "none" }}>
          <span className="chart">나의 카드목록 보기</span>
        </Link>
      </div>
      {true ? <MyCard /> : <Empty>나의 카드 정보가 없습니다.</Empty>}
      <div className="top3">몽키차트 TOP 3</div>
      <Topcard>
        <span className="num">1</span>
        <img src="https://api.card-gorilla.com:8080/storage/card/2330/card_img/24131/2330card.png" />
        <div>
          <div className="card">LOCA 365 카드</div>
          <div>은행명</div>
        </div>
      </Topcard>
      <Topcard></Topcard>
      <Topcard></Topcard>
      <Banner>
        <div>
          <div>나만의 맞춤형 카드를 찾고싶다면?</div>
          <div>몽키추천 받아보기!</div>
          <div>바로가기 </div>
        </div>
        <img />
      </Banner>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 425px;
  margin: 0 auto;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 20px 0 10px;
  }
  .mycard,
  .top3 {
    font-size: 20px;
    font-weight: 700;
  }
  .chart {
    font-size: 12px;
    color: black;
    cursor: pointer;
    :hover {
      color: var(--color-primary);
    }
  }
  .top3 {
    margin: 30px 0 20px;
  }
`;

const Empty = styled.div`
  height: 135px;
  padding: 0 30px;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--color-gray);
`;
const Topcard = styled.div`
  height: 80px;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    .card {
      color: var(--color-primary);
    }
  }
  span {
    font-size: 25px;
    font-weight: 700;
    margin-right: 30px;
  }
  img {
    height: 45px;
    margin-right: 30px;
    aspect-ratio: auto 1/1;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  .card {
    font-size: 16px;
    font-weight: 600;
    padding: 3px 0;
  }
`;

const Banner = styled.div`
  height: 135px;
  padding: 0 30px;
  margin-top: 20px;
  background-color: #ffeacc;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
