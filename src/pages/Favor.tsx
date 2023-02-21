import React, { useState, useEffect } from "react";
import getTokenApi from "../api/monkeyGetToken";
import styled from "styled-components";
import CardItem from "../components/searchProduct/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchFavor } from "../store/favorSlice";

type Props = {};

type FavorCard = {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
};

const Favor = (props: Props) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const favorList = useSelector((state: RootState) => state.favor.favorList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // 여기 페이지 들어오면 관심상품 가져오는데 favorList.json 데이터라 항상 2개 상품 가져옴
    // 그래서 추가, 삭제해도 다시 이 페이지 들어오면 favorList.json 데이터 상품 2개 가져옴
    dispatch(fetchFavor(userInfo.userId));
  }, []);

  const name = userInfo.name;
  const length = favorList.length;

  return (
    <Wrapper>
      <TopWrapper>
        <h2>나의 관심카드</h2>
        <img src="/monkey_love.png" />
        <span>
          {name}님의 관심카드는 {length}개 입니다.
        </span>
      </TopWrapper>
      <CardWrapper>
        {favorList.map(({ image: imageURL, type: cardType, ...rest }) => {
          return (
            // 이부분 백쪽에서 리팩토링 되면 수정
            <CardItem card={{ ...rest, imageURL, cardType }} key={rest.id} />
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: var(--width-inner);
  padding: 30px;
  padding-top: 0;
  margin-bottom: var(--margin-bottom);
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: 900;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
  img {
    width: 212px;
  }
  span {
    color: var(--color-brown);
    font-weight: 600;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 2rem;
`;

export default Favor;
