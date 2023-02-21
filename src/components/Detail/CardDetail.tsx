import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Back from "../ui/Back";
import { v4 as uuidv4 } from "uuid";
import getTokenApi from "../../api/monkeyGetToken";
import BtnSuggest from "../ui/BtnSuggest";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewList, selectReview } from "../../store/reviewSlice";
import { RootState } from "../../store/store";

type Card = {
  card: CardInfo;
};

const CardDetail = ({ card }: Card) => {
  const dispatch = useDispatch();
  const selectedReview = useSelector(
    (state: RootState) => state.review.message,
  );
  const [reviews, setReviews] = useState<getReview>({
    id: 0,
    message: [""],
  });

  useEffect(() => {
    dispatch(fetchReviewList(card.id));
  }, [card.id]);

  const cardImage = new Image();
  cardImage.src = card.image;

  const benefits = [
    ["커피", "coffee"],
    ["교통", "transportation"],
    ["영화", "movie"],
    ["베달", "delivery"],
    ["통신", "phone"],
    ["주유", "gas"],
    ["간편결재", "simplePayment"],
    ["공과금", "tax"],
    ["쇼핑", "shopping"],
  ];

  const findBenefit = () => {
    const result = [];
    for (let i = 0; i < benefits.length; i++) {
      if (card.benefit[i] === "yes") {
        let eng = benefits[i][1];
        let kor = benefits[i][0];
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

  const clickHandler = (review: string[]) => {
    dispatch(selectReview(selectedReview));
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
        <Reviews>
          {reviews.message &&
            reviews.message.map((message) => (
              <li className="text" key={uuidv4()}>
                {message}
              </li>
            ))}
        </Reviews>
        <hr className="bottom" color="#f5f5f5" />
        <ChooseKeyword>
          {reviewArray.map((text, index) => (
            <BtnReview
              key={index}
              className={selectedReview.includes(text) ? "active" : ""}
            >
              {text}
            </BtnReview>
          ))}
        </ChooseKeyword>
        {reviews.message?.length === undefined ? (
          <Button
            color={"var(--color-white)"}
            background={"var(--color-primary)"}
            onClick={() => {
              clickHandler;
            }}
          >
            리뷰 선택하기
          </Button>
        ) : (
          <Button
            color={"var(--color-white)"}
            background={"var(--color-primary)"}
            onClick={() => {
              clickHandler;
            }}
          >
            선택한 리뷰 변경하기
          </Button>
        )}
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

const Reviews = styled.ul`
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

const BtnReview = styled.button`
  display: inline-block;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  background-color: #ffffff;
  height: 34px;
  line-height: 22px;
  padding: 0 13px;
  margin-right: 12px;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    background: #f1f2f4;
  }
  &.active {
    background: #fffaef;
    border: 1px solid var(--color-primary);
  }
`;

export default CardDetail;
