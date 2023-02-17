import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import CardItem from "../components/searchProduct/CardItem";
import BtnSuggest from "../components/ui/BtnSuggest";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  fetchSearch,
  handleSearchBenefit,
  handleSearchCompany,
} from "../store/searchSlice";

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
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const searchList = useSelector((state: RootState) => state.search.searchList);
  const selectedBenefit = useSelector(
    (state: RootState) => state.search.searchBenefit,
  );
  const selectedCompany = useSelector(
    (state: RootState) => state.search.searchCompany,
  );
  const dispatch = useDispatch<AppDispatch>();

  const benefits = [
    "coffee",
    "transportation",
    "movie",
    "delivery",
    "phone",
    "gas",
    "simplePayment",
    "tax",
    "shopping",
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

  const cardList = searchList.map((card) => {
    return <CardItem key={card.id} card={card} />;
  });

  useEffect(() => {
    dispatch(fetchSearch({ selectedBenefit, selectedCompany }));
  }, [selectedBenefit, selectedCompany]);

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
        {/* <SearchGroup>
          <Title>신용 / 체크</Title>
          <div>
            <BtnSuggest suggest={"신용"} />
            <BtnSuggest suggest={"체크"} />
          </div>
        </SearchGroup> */}
        <SearchGroup>
          <Title>추천 카드사</Title>
          <div>
            {companies.map((company, index) => (
              <BtnSuggest
                key={index}
                suggest={company}
                className={selectedCompany.includes(company) ? "active" : ""}
                handleSuggest={() => {
                  dispatch(handleSearchCompany(company));
                }}
              />
            ))}
          </div>
        </SearchGroup>
        <SearchGroup>
          <Title>추천 혜택</Title>
          <div>
            {benefits.map((benefit, index) => (
              <BtnSuggest
                key={index}
                suggest={benefit}
                className={selectedBenefit.includes(benefit) ? "active" : ""}
                handleSuggest={() => {
                  dispatch(handleSearchBenefit(benefit));
                }}
              />
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
  /* height: 80vh; */
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
