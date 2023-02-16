import React from "react";
import styled from "styled-components";

type Props = {
  item: string;
  benefit: never[];
  setBenefit: React.Dispatch<React.SetStateAction<never[]>>;
};

const BenefitIcon = (item: Props) => {
  console.log(item);
  if (item.item === "커피") {
    return (
      <Icon>
        <img src="./benefit_coffee.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "교통") {
    return (
      <Icon>
        <img src="./benefit_transportation.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "영화") {
    return (
      <Icon>
        <img src="./benefit_movie.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "배달") {
    return (
      <Icon>
        <img src="./benefit_delivery.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "통신") {
    return (
      <Icon>
        <img src="./benefit_phone.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "주유") {
    return (
      <Icon>
        <img src="./benefit_gas.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "간편결제") {
    return (
      <Icon>
        <img src="./benefit_simplePayment.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "공과금") {
    return (
      <Icon>
        <img src="./benefit_tax.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
  if (item.item === "쇼핑") {
    return (
      <Icon>
        <img src="./benefit_transportation.png" alt="" />
        <p>{item.item}</p>
      </Icon>
    );
  }
};

const Icon = styled.div`
  width: 110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
  padding: 5px 0;
  cursor: pointer;
  img {
    width: 40px;
    padding-bottom: 5px;
  }
  p {
    width: 100%;
    text-align: center;
    color: var(--color-gray);
  }
`;

export default BenefitIcon;
