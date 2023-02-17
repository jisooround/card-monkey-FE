import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardItem from "../components/searchProduct/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchFavor } from "../store/favorSlice";
import CardItemTest from "../components/ui/FavorItem-test";

type Props = {};

const Favor = (props: Props) => {
  const favorList = useSelector((state: RootState) => state.favor.favorList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // 여기 페이지 들어오면 관심상품 가져오는데 favorList.json 데이터라 항상 2개 상품 가져옴
    // 그래서 추가, 삭제해도 다시 이 페이지 들어오면 favorList.json 데이터 상품 2개 가져옴
    dispatch(fetchFavor());
  }, []);

  const name = localStorage.getItem("name");
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
        {favorList.map((favorCard: FavorCard) => (
          <CardItemTest
            card={favorCard}
            key={favorCard.id}
            favorList={favorList}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
