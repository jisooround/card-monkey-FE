import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Back from "../ui/Back";
import { v4 as uuidv4 } from "uuid";
import getTokenApi from "../../api/monkeyGetToken";
import BtnSuggest from "../ui/BtnSuggest";
import { useDispatch } from "react-redux";

type Card = {
  card: CardInfo;
};

type Props = {};

const CardDetail = ({ card }: Card) => {
  const [keyword, setKeyword] = useState<Array<getReview>>([]);
  const [selectedReview, setSelectedReview] = useState<Array<getReview>>([]);
  const [selected, setSelected] = useState(false);

  const getKey = async (id: number) => {
    const data = await getTokenApi.getReview(id);
    setKeyword(data);
  };

  useEffect(() => {
    getKey(card.id);
  }, [card.id]);

  console.log(keyword);

  const cardImage = new Image();
  cardImage.src = card.image;

  const benefitEnglish = [
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

  const benefitArray = [
    "커피",
    "교통",
    "영화",
    "배달",
    "통신",
    "주유",
    "간편결제",
    "공과금",
    "쇼핑",
  ];

  const findBenefit = () => {
    const result = [];
    for (let i = 0; i < benefitArray.length; i++) {
      if (card.benefit[i] === "yes") {
        let eng = benefitEnglish[i];
        let kor = benefitArray[i];
        result.push(
          <div className="element">
            <img src={`/benefit_${eng}.png`} key={uuidv4()} />
            <span>{kor}</span>
          </div>,
        );
      }
    }
    return result;
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  const selectReview = (review) => {
    setSelectedReview(review);
  };

  const reviewArray = [
    "MZ세대가 선택한 카드",
    "마트,,,다녀오셨어요? 쇼핑할 때 좋은 카드",
    "뚜벅이분들~대중교통 할인 해줍니다",
    "중요한건 꺾이지 않은 적립율",
    "개봉 영화 모두 섭렵하는 나는 영화광",
    "반려동물도 내 가족이니까! 동물병원 할인",
    "핸드폰 비용도 알뜰하게 할인!",
    "꼼꼼한 여행러에게 필수 카드",
  ];

  return (
    <Wrapper>
      <Back />
      <div className="container">
        <CardImg cardImage={cardImage}>
          <img src={card.image} />
        </CardImg>
        <InfoWrap>
          <span
            className={card.type === "CREDIT" ? "type credit" : "type check"}
          >
            {card.type === "CREDIT" ? "신용카드" : "체크카드"}
          </span>
          <h3 className="name">{card.name}</h3>
          <h4 className="company">{card.company}</h4>
        </InfoWrap>
        <SectionTitle>
          <hr className="top" color="#f5f5f5" />
          <div className="content">
            <h5>Benefit</h5>
            <span>주요혜택</span>
          </div>
          <hr className="bottom" color="#f5f5f5" />
        </SectionTitle>
        <Benefit>{card.benefit && findBenefit()}</Benefit>
        <div className="button-wrapper">
          <Button
            color={"var(--color-white)"}
            background={"var(--color-primary)"}
          >
            카드 신청하기
          </Button>
          <Button
            color={"var(--color-brown)"}
            background={"var(--color-lightgray)"}
          >
            내 관심카드에 추가하기
          </Button>
        </div>
        <SectionTitle>
          <hr className="top" color="#f5f5f5" />
          <div className="content">
            <h5>Keyword</h5>
            <span>사용자가 평가한 이 카드의 키워드입니다.</span>
          </div>
          <hr className="bottom" color="#f5f5f5" />
        </SectionTitle>
        <Keyword>
          {keyword.message &&
            keyword.message.map((message) => (
              <li className="text" key={uuidv4()}>
                {message}
              </li>
            ))}
        </Keyword>
        <hr className="bottom" color="#f5f5f5" />
        <ChooseKeyword>
          {reviewArray.map((review) => (
            <BtnSuggest suggest={review}></BtnSuggest>
          ))}
        </ChooseKeyword>
        <Button
          color={"var(--color-white)"}
          background={"var(--color-primary)"}
          onClick={() => {}}
        >
          리뷰 선택하기
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  background-color: #f5f5f5;
  height: 150px;
  width: 100%;
  .container {
    padding-bottom: var(--margin-bottom);
    .button-wrapper {
      margin-bottom: 40px;
    }
  }
  hr {
    width: 100%;
    &.bottom {
      height: 2px;
      box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.1);
    }
  }
`;

const CardImg = styled.div<{ cardImage: HTMLImageElement }>`
  text-align: center;
  img {
    width: ${(props) =>
      props.cardImage.width >= props.cardImage.height ? "220px" : "150px"};
    background-color: inherit;
    margin: 20px auto 10px auto;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  .name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .company {
    font-size: 14px;
    font-weight: 530;
    margin-bottom: 10px;
  }

  .type {
    display: inline-block;
    border-radius: 40px;
    font-size: 10px;
    font-weight: bold;
    padding: 7px;
    text-align: center;
    margin-bottom: 10px;
    &.credit {
      color: #ff6b00;
      background-color: #ffeacc;
    }
    &.check {
      color: #1bbbee;
      background-color: #dbf6ff;
    }
  }
`;

const SectionTitle = styled.div`
  height: 150px;
  color: #ff6b00;
  text-align: center;
  margin-top: 10px;
  .content {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h5 {
      margin-bottom: 10px;
      font-style: italic;
      font-weight: 600;
      font-size: 30px;
    }
    span {
      font-weight: 400;
      font-size: 15px;
      position: relative;
    }
  }
`;

const Button = styled.button<Button>`
  display: block;
  margin: 20px auto;
  width: 90%;
  height: 55px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  &:hover {
    transition: 0.3s;
    color: ${(props) => props.background};
    background-color: var(--color-brown);
  }
`;

const Benefit = styled.div`
  margin-top: 30px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  .element {
    display: flex;
    border-right: 1px solid var(--color-lightgray);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :nth-child(3n) {
      border: none;
    }
    img {
      width: 30px;
      height: 30px;
    }
    span {
      margin-top: 10px;
      font-size: 13px;
      color: var(--color-gray);
      font-weight: 600;
    }
  }
`;

const Keyword = styled.ul`
  display: grid;
  grid-gap: 10px;
  width: 400px;
  margin: 0 auto;
  place-items: center;
  padding-bottom: 30px;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: var(--color-lightgray);
    color: var(--color-primary);
    font-weight: 600;
    width: 100%;
    height: 50px;
    &::marker {
      background-color: var(--color-lightgray);
      color: var(--color-primary);
    }
  }
`;

const ChooseKeyword = styled.div`
  padding: 20px 0;
  display: grid;
  justify-content: center;
  row-gap: 30px;
  column-gap: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 30px);
  place-items: center;
`;

const Review = styled.button`
  display: inline-block;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  width: 200px;
  height: auto;
  line-height: 22px;
  padding: 0 13px;
  font-size: 14px;
  border-radius: 20px;
  &:hover {
    border: 1px solid var(--color-primary);
    background: #f1f2f4;
  }
  &.select {
    border: 1px solid var(--color-primary);
    border-radius: 20px;
    &:hover {
      border: 2px solid var(--color-primary);
    }
  }
`;

export default CardDetail;
