import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Back from "../ui/Back";
import { v4 as uuidv4 } from "uuid";
import getTokenApi from "../../api/monkeyGetToken";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReview,
  fetchReviewList,
  selectReview,
} from "../../store/reviewSlice";
import { AppDispatch, RootState } from "../../store/store";
import { addFavor, deleteFavor, fetchFavor } from "../../store/favorSlice";

interface CardInfo {
  benefit: string[];
  company: string;
  id: number;
  image: string;
  name: string;
  type: string;
}

const CardDetail = ({ card }: CardInfo) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  console.log(card);
  let id = card.id;
  const dispatch = useDispatch<AppDispatch>();
  const selectedReview = useSelector(
    (state: RootState) => state.review.message,
  );
  const favorList = useSelector((state: RootState) => state.favor.favorList);

  const cardImage = new Image();
  cardImage.src = card.image;

  const benefits = [
    ["커피", "coffee"],
    ["교통", "transportation"],
    ["영화", "movie"],
    ["베달", "delivery"],
    ["통신", "phone"],
    ["주유", "gas"],
    ["간편결재", "simplepayment"],
    ["공과금", "tax"],
    ["쇼핑", "shopping"],
  ];

  const findBenefit = () => {
    const result = [];
    for (let j = 0; j < card.benefit.length; j++) {
      for (let i = 0; i < benefits.length; i++) {
        if (benefits[i][1] === card.benefit[j]) {
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
    }
    return result;
  };

  const toggleFavor = async (e: any) => {
    e.stopPropagation();
    const data = await getTokenApi.toggleFavor(card.id); // 이거 관심상품 추가, 삭제 api가 똑같아서 하나로 합침(추가, 삭제 api 함수 아직 있긴 함)
    console.log(data);
    if (data === "찜하기 완료") {
      /* 서버에서 관심상품 추가되면 우리도 추가
         원래는 다시 전체 관심상품 조회해서 가져오는게 더 정확한데 일단은 이렇게 (어제 소재헌이 멘토님한테 질문한거 참고) */
      console.log("1");
      dispatch(
        addFavor({ ...card, image: card.imageURL, type: card.cardType }),
      );
      // dispatch(addFavor(card));
    } else if (data === "찜하기 취소 완료") {
      /* 서버에서 관심상품 삭제되면 우리도 삭제
         원래는 다시 전체 관심상품 조회해서 가져오는게 더 정확한데 일단은 이렇게 (어제 소재헌이 멘토님한테 질문한거 참고) */
      dispatch(deleteFavor(card.id));
      console.log("2");
    } else {
      // 일단 지금은 무조건 요기 조건으로 들어옴, 밑에 둘 중 하나만 실행
      // dispatch(addFavor(card));
      dispatch(deleteFavor(card.id));
      console.log("3");
    }
  };

  useEffect(() => {
    // 여기 페이지 들어오면 관심상품 가져오는데 favorList.json 데이터라 항상 2개 상품 가져옴
    // 그래서 추가, 삭제해도 다시 이 페이지 들어오면 favorList.json 데이터 상품 2개 가져옴
    dispatch(fetchFavor(userInfo.userId));
  }, []);

  const application = async (id) => {
    return await getTokenApi.cardApplication(id);
  };

  // const clickHandler = (text: string) => {
  //   dispatch(selectReview(text));
  // };

  // useEffect(() => {
  //   dispatch(fetchReview({ id, selectedReview }));
  // }, [selectedReview, card.id]);

  // const reviewArray = [
  //   "MZ세대가 선택한 카드",
  //   "마트,,,다녀오셨어요? 쇼핑할 때 좋은 카드",
  //   "뚜벅이분들~대중교통 할인 해줍니다",
  //   "중요한건 꺾이지 않은 적립율",
  //   "개봉 영화 모두 섭렵하는 나는 영화광",
  //   "반려동물도 내 가족이니까! 동물병원 할인",
  //   "핸드폰 비용도 알뜰하게 할인!",
  //   "꼼꼼한 여행러에게 필수 카드",
  // ];

  return (
    <Wrapper>
      <Back />
      <CardImg cardImage={cardImage}>
        <img src={card.image} />
      </CardImg>
      <div className="container">
        <InfoWrap>
          <span
            className={
              card.cardType === "CREDIT" ? "type credit" : "type check"
            }
          >
            {card.cardType === "CREDIT" ? "신용카드" : "체크카드"}
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
            onClick={() => application(card.id)}
          >
            카드 신청하기
          </Button>
          {favorList.find((item) => item.id === card.id) ? (
            <Button
              color={"var(--color-brown)"}
              background={"var(--color-lightgray)"}
              onClick={toggleFavor}
            >
              내 관심카드에 삭제하기
            </Button>
          ) : (
            <Button
              color={"var(--color-brown)"}
              background={"var(--color-lightgray)"}
              onClick={toggleFavor}
            >
              내 관심카드에 추가하기
            </Button>
          )}
        </div>
        {/* <SectionTitle>
          <hr className="top" color="#f5f5f5" />
          <div className="content">
            <h5>Keyword</h5>
            <span>사용자가 평가한 이 카드의 키워드입니다.</span>
          </div>
          <hr className="bottom" color="#f5f5f5" />
        </SectionTitle>
        <Reviews>
          {selectedReview.message &&
            selectedReview.message.map((message: string) => (
              <li className="text" key={uuidv4()}>
                {message}
              </li>
            ))}
        </Reviews>
        <hr className="bottom" color="#f5f5f5" />
        <ChooseKeyword>
          {reviewArray.map((text) => (
            <BtnReview
              type="button"
              key={uuidv4()}
              className={selectedReview.includes(text) ? "active" : ""}
              onClick={() => clickHandler(text)}
            >
              {text}
            </BtnReview>
          ))}
        </ChooseKeyword> */}
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
    margin-bottom: var(--margin-bottom);
    .button-wrapper {
      background-color: inherit;
      height: 150px;
      padding-bottom: 40px;
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
      props.cardImage.width > props.cardImage.height ? "220px" : "180px"};
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
