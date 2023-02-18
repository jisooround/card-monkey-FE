import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardType } from "../../pages/MainPage";

type MyCardType = {
  card: CardType;
};

export const MyCards = ({ card }: MyCardType) => {
  return (
    <Link to="/detail/:id" style={{ textDecoration: "none" }}>
      <Mycard>
        <div className="box">
          <div className="circle">
            <img src={card.image} />
          </div>
          <div>
            <div className="cardname">{card.name}</div>
            <div>{card.company}</div>
          </div>
        </div>
      </Mycard>
    </Link>
  );
};

const Mycard = styled.div`
  .box {
    height: 135px;
    padding: 0 30px;
    border: 1px solid var(--color-gray);
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: black;
    cursor: pointer;
  }
  .circle {
    background-color: var(--color-lightgray);
    border-radius: 50%;
    width: 110px;
    height: 110px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 70px;
      aspect-ratio: auto 1/1;
      transition: 0.2s;
      filter: drop-shadow(6px 4px 4px #c3c3c3);
      :hover {
        transform: translateY(-5px);
      }
    }
  }
  .cardname {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
