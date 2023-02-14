import React, { useState } from "react";
import { Card } from "../../pages/Search";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router";

type CardItemPropsType = {
  card: Card;
  isFavor: boolean;
};

const CardItem = ({ card, isFavor }: CardItemPropsType) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();

  const cardImage = new Image();
  cardImage.src = card.image;
  //   console.log(cardImage.width, cardImage.height);

  const toggleFavor = (e: any) => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
    // if (isActive) {
    //   alert("관심상품에 등록되었습니다");
    // } else {
    //   alert("관심상품에서 삭제되었습니다");
    // }
  };

  return (
    <CardContainer
      onClick={() => {
        navigate(`/detail/${card.id}`);
      }}
    >
      <CardImageWrapper cardImage={cardImage}>
        <div className="circle"></div>
        <img src={card.image} />
      </CardImageWrapper>
      <CardInfo>
        <div className="wrapper">
          <div className="name">{card.name}</div>
          <div className="company">{card.company}</div>
          <div className="check">체크카드</div>
        </div>
      </CardInfo>
      <div
        className={isFavor ? "favor active" : "favor"}
        onClick={(e) => toggleFavor(e)}
      >
        <AiFillHeart />
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  &:hover img {
    transform: translateY(-8px);
  }
  box-sizing: border-box;
  display: flex;
  border: 2px solid var(--color-gray);
  border-radius: 12px;
  padding: 30px;
  position: relative;
  cursor: pointer;
  .favor {
    position: absolute;
    bottom: 10px;
    right: 25px;
    svg {
      display: inline-block;
      width: 30px;
      height: 30px;
      color: var(--color-gray);
      transition: 0.6s;
    }
    &.active svg {
      color: red;
    }
    &:hover {
      svg {
        transform: scale(1.3);
      }
    }
  }
`;

const CardImageWrapper = styled.div<{ cardImage: HTMLImageElement }>`
  margin-right: 20px;
  width: 110px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: 0.2s;
    filter: drop-shadow(6px 4px 4px #c3c3c3);
    width: ${(props) =>
      props.cardImage.width > props.cardImage.height ? "110px" : "75px"};
  }
  .circle {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: var(--color-lightgray);
  }
`;

const CardInfo = styled.div`
  display: flex;
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
  .check {
    display: inline-block;
    border-radius: 40px;
    background-color: #ffeacc;
    font-size: 10px;
    font-weight: bold;
    padding: 7px;
    text-align: center;
    color: var(--color-primary);
  }
`;

export default CardItem;
