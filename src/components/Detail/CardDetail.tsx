import React from "react";
import styled from "styled-components";
import { CardInfo } from "../../pages/Detail";

type Card = {
  card: CardInfo;
};

type Props = {};

const CardDetail = ({ card }: Card) => {
  const cardImage = new Image();
  cardImage.src = card.image;

  return (
    <>
      <CardImg cardImage={cardImage}>
        <img src={card.image} />
      </CardImg>
      <InfoWrap>
        <div className="text-wrap">
          <h3>{card.name}</h3>
          <h4>{card.company}</h4>
        </div>
      </InfoWrap>
    </>
  );
};

const CardImg = styled.div<{ cardImage: HTMLImageElement }>`
  align-items: center;
  img {
    width: ${(props) =>
      props.cardImage.width > props.cardImage.height ? "110px" : "75px"};
  }
`;

const InfoWrap = styled.div`
  .text-wrap {
    display: flex;
  }
`;

export default CardDetail;
