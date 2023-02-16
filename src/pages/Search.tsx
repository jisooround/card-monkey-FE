import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import CardItem from "../components/searchProduct/CardItem";
import BtnSuggest from "../components/ui/BtnSuggest";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

type Props = {};

export type SearchCard = {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
};

const Search = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm: string | null = searchParams.get("q");
  const [cards, setCards] = useState<Array<SearchCard>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
  const companies = [
    "신한",
    "삼성",
    "국민",
    "롯데",
    "하나",
    "우리",
    "농협",
    "기업",
    "현대",
    "바로",
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

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  // useEffect(() => {
  //   if (!searchTerm) {
  //     getAllCard();
  //   } else {
  //     getSearchCard();
  //   }
  // }, [searchTerm]);

  return (
    <SearchContainer>
      <div
        className="title tags"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>검색 추천 태그</div>
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
      <SearchGroupContainer className={isOpen ? "" : "hide"}>
        <SearchGroup>
          <Title>신용 / 체크</Title>
          <div>
            <BtnSuggest suggest={"신용"} />
            <BtnSuggest suggest={"체크"} />
          </div>
        </SearchGroup>
        <SearchGroup>
          <Title>추천 카드사</Title>
          <div>
            {companies.map((company, index) => (
              <BtnSuggest key={index} suggest={company} />
            ))}
          </div>
        </SearchGroup>
        <SearchGroup>
          <Title>추천 혜택</Title>
          <div>
            {benefits.map((benefit, index) => (
              <BtnSuggest key={index} suggest={benefit} />
            ))}
          </div>
        </SearchGroup>
      </SearchGroupContainer>
      <div className="title">검색 결과</div>
      <CardListContainer>{cardList}</CardListContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  padding: 0 30px;
  .title {
    /* margin-bottom: 5px; */
    color: #46433f;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0px;
    &.tags {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      /* &:hover {
        background-color: var(--color-lightgray);
      } */
    }
  }
`;

const CardListContainer = styled.div`
  padding: 10px 0;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SearchGroupContainer = styled.div`
  height: 80vh;
  padding-left: 15px;
  transition: height 0.5s;
  overflow: hidden;
  &.hide {
    height: 0;
  }
`;

const SearchGroup = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  /* padding: 0 30px; */
`;

const Title = styled.div`
  margin-bottom: 5px;
  color: #46433f;
  font-size: 16px;
  font-weight: bold;
`;

export default Search;
