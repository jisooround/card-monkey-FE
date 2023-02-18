import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import CardItem from "../components/searchProduct/CardItem";

type Props = {};

export type SuggestCard = {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
};

const Suggest = (props: Props) => {
  const [suggestCards, setSuggestCards] = useState<Array<FavorCard>>([]);

  const suggestCardList = suggestCards.map((card) => {
    return (
      <CardItemWrapper key={card.id}>
        <BtnBenefit className="benefit-title">#대중교통비 할인</BtnBenefit>
        <CardItem card={card} />
      </CardItemWrapper>
    );
  });

  const getSuggestCard = async () => {
    const data = await getTokenApi.benefitCard("대중교통");
    setSuggestCards(data);
  };

  useEffect(() => {
    getSuggestCard();
  }, []);

  return (
    <Container>
      <div className="page-info">
        <div className="title">몽키추천 서비스</div>
        <div className="img-wrapper">
          <img src="/monkey_star.png" />
        </div>
      </div>
      <div className="benefit">
        <div className="title">윤준수님이 선택한 관심 혜택</div>
        <div className="buttons">
          <BtnBenefit>#대중교통비 할인</BtnBenefit>
          <BtnBenefit>#영화/문화</BtnBenefit>
          <BtnBenefit>#반려동물</BtnBenefit>
        </div>
      </div>
      <div className="result-wrapper">
        <div className="title">몽키추천 결과입니다.</div>
        <CardListContainer>{suggestCardList}</CardListContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
  padding-top: 0;
  margin-bottom: var(--margin-bottom);
  .page-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .img-wrapper {
      img {
        width: 212px;
      }
    }
  }
  .benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 35px;
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #6b4d29;
    }
    .buttons {
      display: flex;
      gap: 20px;
    }
  }
  .result-wrapper {
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
`;

const CardItemWrapper = styled.div`
  .benefit-title {
    margin-bottom: 20px;
  }
`;

const CardListContainer = styled.div`
  padding: 10px 0;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BtnBenefit = styled.button`
  display: inline-block;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  background-color: #ffffff;
  height: 34px;
  line-height: 22px;
  padding: 0 15px;
  color: var(--color-primary);
  font-size: 17px;
  font-weight: bold;
`;

export default Suggest;
