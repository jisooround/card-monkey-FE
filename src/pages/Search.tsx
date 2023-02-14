import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import CardItem from "../components/searchProduct/CardItem";
import BtnBenefit from "../components/ui/BtnBenefit";

type Props = {};

export type Card = {
  id: number;
  name: string;
  company: string;
  image: string;
};

const Search = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm: string | null = searchParams.get("q");
  const [cards, setCards] = useState<Array<Card>>([]);
  const benefits = [
    "모든 가맹점",
    "교통",
    "주유",
    "통신",
    "마트/편의점",
    "쇼핑",
    "푸드",
    "카페/디저트",
    "선택형",
    "디지털구독",
    "뷰티/피트니스",
    "무실적",
    "공과금/렌탈",
    "병원/약국",
    "애완동물",
    "교육/육아",
    "자동차/하이패스",
    "레저/스포츠",
    "영화/문화",
    "간편결제",
    "항공마일리지",
    "공항라운지/PP",
    "프리미엄",
    "제휴/PLCC",
    "여행/숙박",
    "해외",
    "비즈니스",
  ];

  const cardList = cards.map((card) => {
    return <CardItem key={card.id} card={card} />;
  });

  const getAllCard = async () => {
    const res = await getTokenApi.allCard();
    if (res.status === 200) {
      setCards(res.data);
      console.log(res);
    }
  };

  const getSearchCard = async () => {
    const res = await getTokenApi.searchByCompany(searchTerm || "");
    if (res.status === 200) {
      setCards(res.data);
      console.log(res);
    }
  };

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  useEffect(() => {
    if (!searchTerm) {
      getAllCard();
    } else {
      getSearchCard();
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchGroupContainer>
        <SearchGroup>
          <Title>추천 혜택</Title>
          <div>
            {benefits.map((benefit, index) => (
              <BtnBenefit key={index} benefit={benefit} />
            ))}
          </div>
        </SearchGroup>
      </SearchGroupContainer>
      <CardListContainer>{cardList}</CardListContainer>
    </div>
  );
};

const CardListContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* box-sizing: border-box; */
`;

const SearchGroupContainer = styled.div`
  /* position: absolute;
  top: 60px;
  z-index: 10;
  height: calc(100% - 60px);
  overflow-y: auto; */
`;

const SearchGroup = styled.div`
  /* margin-top: 32px; */
  padding: 0 18px;
`;

const Title = styled.div`
  margin-bottom: 5px;
  color: #46433f;
  font-size: 16px;
  font-weight: bold;
`;

export default Search;
