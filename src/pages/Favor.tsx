import React, { useState, useEffect } from "react";
import getTokenApi from "../api/monkeyGetToken";
import styled from "styled-components";
import CardItem from "../components/ui/CardItem";

type Props = {};

type favorCard = {
  id: number;
  image: string;
  name: string;
  company: string;
};

const Favor = (props: Props) => {
  const [favorList, setFavorList] = useState<favorListType[]>([
    {
      id: 0,
      image: "",
      name: "",
      company: "",
    },
  ]);
  const getFavorList = async () => {
    const data = await getTokenApi.myFavor();
    console.log(data);
    setFavorList(data);
  };
  useEffect(() => {
    getFavorList();
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <h2>나의 관심카드</h2>
        <img src="/monkey_love.png" />
      </TopWrapper>
      <CardWrapper>
        {favorList.map((favorCard: favorCard) => (
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
