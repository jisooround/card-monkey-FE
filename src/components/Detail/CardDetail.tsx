import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Back from "../ui/Back";
import { v4 as uuidv4 } from "uuid";
import Button from "../ui/Button";
import GetKeyword from "./GetKeyword";
import getTokenApi from "../../api/monkeyGetToken";

type Card = {
  card: CardInfo;
};

type Props = {};

const CardDetail = ({ card }: Card) => {
  const [keyword, setKeyword] = useState<getReview[]>([]);
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

  return (
    <Half>
      <Wrapper>
        <Back />
        <CardImg cardImage={cardImage}>
          <img src={card.image} />
        </CardImg>
        <InfoWrap>
          <div className="text-wrap">
            <span
              className={card.type === "CREDIT" ? "type credit" : "type check"}
            >
              {card.type === "CREDIT" ? "신용카드" : "체크카드"}
            </span>
            <h3 className="name">{card.name}</h3>
            <h4 className="company">{card.company}</h4>
          </div>
        </InfoWrap>
        <SectionTitle>
          <hr className="top" color="#f5f5f5" />
          <h5>Benefit</h5>
          <br />
          <span>주요혜택</span>
          <hr className="bottom" color="#f5f5f5" />
        </SectionTitle>
        <Benefit>{card.benefit && findBenefit()}</Benefit>
        <div className="button-wrapper">
          <Button
            text={"카드 신청하기"}
            fontColor={"var(--color-white)"}
            background={"var(--color-primary)"}
          />
          <Button
            text={"내 관심카드에 추가하기"}
            fontColor={"var(--color-brown)"}
            background={"var(--color-lightgray)"}
          />
        </div>
        <SectionTitle>
          <hr className="top" color="#f5f5f5" />
          <h5>Keyword</h5>
          <br />
          <span>사용자가 평가한 이 카드의 키워드입니다.</span>
          <hr className="bottom" color="#f5f5f5" />
        </SectionTitle>
        <Message>
          {keyword.message &&
            keyword.message.map((message) => (
              <li className="text" key={uuidv4()}>
                {message}
              </li>
            ))}
        </Message>
      </Wrapper>
    </Half>
  );
};

const Half = styled.div`
  background-color: #f5f5f5;
  height: 150px;
`;

const Wrapper = styled.div`
  hr {
    width: 100%;
    &.bottom {
      height: 2px;
      box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.1);
    }
  }
  .button-wrapper {
    margin-bottom: 40px;
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
  .text-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }
`;

const SectionTitle = styled.div`
  color: #ff6b00;
  text-align: center;
  margin-top: 10px;
  h5 {
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
  }
  span {
    top: -10px;
    font-weight: 400;
    font-size: 15px;
    position: relative;
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

const Message = styled.ol`
  display: grid;
  grid-gap: 10px;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  .text {
    list-style-type: decimal;
    background-color: var(--color-lightgray);
    color: var(--color-primary);
    text-align: center;
    justify-content: center;
    width: 90%;
    height: 40px;
    &::marker {
      background-color: var(--color-lightgray);
      color: var(--color-primary);
    }
  }
`;

export default CardDetail;
