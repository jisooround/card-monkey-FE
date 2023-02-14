import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import { MyCard } from "../components/ui/MyCard";

type Props = {};
type Top3 = {
  company: string;
  id: number;
  image: string;
  name: string;
};

const MainPage = (props: Props) => {
  const [topCard, setTopCard] = useState<Array<Top3>>();

  // const getHot3 = async () => {
  //   const topList = await getTokenApi.hot3();
  //   setTopCard(topList?.data);
  // };

  // useEffect(() => {
  //   getHot3();
  // }, []);

  return (
    <Container>
      <div className="title">
        <span className="mycard">나의 카드</span>
        <Link to="/mypage" style={{ textDecoration: "none" }}>
          <span className="chart">나의 카드목록 보기</span>
        </Link>
      </div>
      {true ? <MyCard /> : <Empty>나의 카드 정보가 없습니다.</Empty>}
      <Link to="/suggest" style={{ textDecoration: "none" }}>
        <img className="banner" src="../banner_main.png" />
      </Link>
      <div className="top3">몽키차트 TOP 3</div>
      {Array.isArray(topCard) ? (
        topCard.map((data) => {
          const cardImage = new Image();
          cardImage.src = data.image;
          return (
            <Link to="/detail/:id" style={{ textDecoration: "none" }}>
              <Topcard cardImage={cardImage} key={data.id}>
                <span className="num">
                  {data.id}
                  <div>
                    <img src={data.image} />
                  </div>
                </span>
                <div>
                  <div className="card">{data.name}</div>
                  <div>{data.company}</div>
                </div>
              </Topcard>
            </Link>
          );
        })
      ) : (
        <div>error</div>
      )}
      <Link to="/suggest" style={{ textDecoration: "none" }}>
        <img className="banner" src="../banner_main.png" />
      </Link>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 425px;
  margin: 0 auto;
  padding-bottom: 80px;
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
  .banner {
    border-radius: 10px;
    margin-top: 10px;
    width: 425px;
    aspect-ratio: auto 1/1;
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
const Topcard = styled.div<{ cardImage: HTMLImageElement }>`
  height: 80px;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 30px;
  color: black;
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
    margin-right: 15px;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 0 auto;
    }
    img {
      margin-left: 20px;
      height: ${(props) =>
        props.cardImage.width > props.cardImage.height ? "50px" : "70px"};
      aspect-ratio: auto 1/1;
    }
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
