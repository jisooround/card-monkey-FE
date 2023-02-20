import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import { MyCards } from "../components/ui/MyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export type CardType = {
  company: string;
  id: number;
  image: string;
  name: string;
  type: string;
};

const MainPage = () => {
  const [topCard, setTopCard] = useState<Array<CardType>>();
  const [myCard, setMyCard] = useState<Array<CardType>>();
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

  const getHot3 = async () => {
    const topList = await getTokenApi.hot3();
    setTopCard(topList);
  };

  const getMyCard = async () => {
    const data = await getTokenApi.cardList();
    setMyCard(data);
    console.log("mycard", myCard);
  };

  useEffect(() => {
    getHot3();
    getMyCard();
  }, []);

  if (topCard === undefined) return console.log("loading");

  return (
    <Container>
      <div className="title">
        <span className="mycard">나의 카드</span>
        <Link to="/mypage" style={{ textDecoration: "none" }}>
          <span className="chart">나의 카드목록 보기</span>
        </Link>
      </div>
      {/* 나의 카드 출력 */}
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {Array.isArray(myCard) ? (
          myCard?.map((data: CardType) => (
            <SwiperSlide key={data.id}>
              <MyCards card={data} />
            </SwiperSlide>
          ))
        ) : (
          <Empty>나의 카드 정보가 없습니다.</Empty>
        )}
      </Swiper>
      {/* 카드 추천 링크 배너 */}
      <Link to="/suggest" style={{ textDecoration: "none" }}>
        <img className="banner" src="../banner_main.png" />
      </Link>
      {/* top3 카드 출력 */}
      <div className="top3">몽키차트 TOP 3</div>
      {Array.isArray(topCard) ? (
        topCard.map((data) => {
          const cardImage = new Image();
          cardImage.src = data.image;
          return (
            <Link
              to="/detail/:id"
              key={data.id}
              style={{ textDecoration: "none" }}
            >
              <Topcard cardImage={cardImage}>
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
      {/* 링크복사 배너 */}
      <Link to="/suggest" style={{ textDecoration: "none" }}>
        <img className="banner" src="../banner_sub.png" />
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
  .swiper-pagination-bullet-active {
    background-color: var(--color-primary) !important;
  }
  .swiper-button-prev {
    color: var(--color-primary) !important;
    font-size: 15px;
    &::after {
      font-size: 20px !important;
      font-weight: 600;
      padding-right: 10px;
    }
  }
  .swiper-button-next {
    color: var(--color-primary) !important;
    &::after {
      font-size: 20px !important;
      font-weight: 600;
    }
  }
`;

export const Empty = styled.div`
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
    margin-right: 50px;
    width: 100px;
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
      /* aspect-ratio: auto 1/1; */
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
