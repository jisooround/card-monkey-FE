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
  handleIsOpen,
  handleSearchBenefit,
  handleSearchCompany,
  handleSearchType,
  resetSearch,
} from "../store/searchSlice";
import CardSkeleton from "../components/ui/CardSkeleton";

type Props = {};

const Search = (props: Props) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchTerm: string | null = searchParams.get("q");

  const searchList = useSelector((state: RootState) => state.search.searchList);
  const selectedType = useSelector(
    (state: RootState) => state.search.searchType,
  );
  const selectedBenefit = useSelector(
    (state: RootState) => state.search.searchBenefit,
  );
  const selectedCompany = useSelector(
    (state: RootState) => state.search.searchCompany,
  );
  const isOpen = useSelector((state: RootState) => state.search.isOpen);
  const status = useSelector((state: RootState) => state.search.status);
  const dispatch = useDispatch<AppDispatch>();

  const benefits = [
    ["커피", "coffee"],
    ["교통", "transportation"],
    ["영화", "movie"],
    ["배달", "delivery"],
    ["통신", "phone"],
    ["주유", "gas"],
    ["간편결재", "simplePayment"],
    ["공과금", "tax"],
    ["쇼핑", "shopping"],
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
  const types = [
    ["신용", "CREDIT"],
    ["체크", "CHECK"],
  ];

  const filterCardType = () => {
    const filteredSearchList = searchList.filter((item) => {
      return selectedType.find((type) => item.cardType === type);
    });
    return filteredSearchList;
  };

  const cardList = filterCardType().map((card) => {
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
          dispatch(handleIsOpen());
        }}
      >
        <div>검색 추천 태그</div>
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
      <SearchGroupContainer className={isOpen ? "" : "hide"}>
        <SearchGroup>
          <button className="reset" onClick={() => dispatch(resetSearch())}>
            태그 초기화
          </button>
          <Title>신용 / 체크</Title>
          <div>
            {types.map((type, index) => (
              <BtnSuggest
                key={index}
                suggest={type[0]}
                className={selectedType.includes(type[1]) ? "active" : ""}
                handleSuggest={() => {
                  dispatch(handleSearchType(type[1]));
                }}
              />
            ))}
          </div>
        </SearchGroup>
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
                suggest={benefit[0]}
                className={selectedBenefit.includes(benefit[1]) ? "active" : ""}
                handleSuggest={() => {
                  dispatch(handleSearchBenefit(benefit[1]));
                }}
              />
            ))}
          </div>
        </SearchGroup>
      </SearchGroupContainer>
      <div className="title">검색 결과{` ${cardList.length}개`}</div>
      <CardListContainer>
        {status === "idle" ? (
          cardList.length === 0 ? (
            <NoItem>검색 결과가 없습니다.</NoItem>
          ) : (
            cardList
          )
        ) : (
          // <CardSkeleton />
          <div>Loading...</div>
        )}
      </CardListContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  padding: 0 30px;
  .title {
    color: #46433f;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0px;
    &.tags {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
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
  /* height: 45vh; */
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
  position: relative;
  .reset {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    background-color: #ffffff;
    height: 34px;
    line-height: 22px;
    padding: 0 13px;
    cursor: pointer;
    &:hover {
      background: #f1f2f4;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 5px;
  color: #46433f;
  font-size: 16px;
  font-weight: bold;
  /* border: 1px solid red; */
`;

const NoItem = styled.div`
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
`;

export default Search;
