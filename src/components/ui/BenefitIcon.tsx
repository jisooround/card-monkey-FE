import React from "react";
import styled from "styled-components";

type Props = {};

const BenefitIcon = ({ item }: { item: BenefitProps["item"] }) => {
  if (item === "coffee") {
    return (
      <Icon>
        <img src="./benefit_coffee.png" alt="" />
        <p>커피</p>
      </Icon>
    );
  }
  if (item === "transportation") {
    return (
      <Icon>
        <img src="./benefit_transportation.png" alt="" />
        <p>교통</p>
      </Icon>
    );
  }
  if (item === "movie") {
    return (
      <Icon>
        <img src="./benefit_movie.png" alt="" />
        <p>영화</p>
      </Icon>
    );
  }
  if (item === "delivery") {
    return (
      <Icon>
        <img src="./benefit_delivery.png" alt="" />
        <p>배달</p>
      </Icon>
    );
  }
  if (item === "phone") {
    return (
      <Icon>
        <img src="./benefit_phone.png" alt="" />
        <p>통신</p>
      </Icon>
    );
  }
  if (item === "gas") {
    return (
      <Icon>
        <img src="./benefit_gas.png" alt="" />
        <p>주유</p>
      </Icon>
    );
  }
  if (item === "simplePayment") {
    return (
      <Icon>
        <img src="./benefit_simplePayment.png" alt="" />
        <p>간편결제</p>
      </Icon>
    );
  }
  if (item === "tax") {
    return (
      <Icon>
        <img src="./benefit_tax.png" alt="" />
        <p>공과금</p>
      </Icon>
    );
  }
  if (item === "shopping") {
    return (
      <Icon>
        <img src="./benefit_transportation.png" alt="" />
        <p>쇼핑</p>
      </Icon>
    );
  }
  return null;
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
