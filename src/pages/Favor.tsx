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
  image: string;
  name: string;
  company: string;
};

const Favor = (props: Props) => {
  const favorList = useSelector((state: RootState) => state.favor.favorList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFavor());
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <h2>나의 관심카드</h2>
        <img src="/monkey_love.png" />
      </TopWrapper>
      <CardWrapper>
        {favorList.map((favorCard: FavorCard) => (
          <CardItem card={favorCard} key={favorCard.id} />
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
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Favor;
