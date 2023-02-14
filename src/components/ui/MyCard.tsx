import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

export const MyCard = (props: Props) => {
  return (
    <Link to="/detail/:id" style={{ textDecoration: "none" }}>
      <Mycard>
        <div className="box">
          <div className="circle">
            <img src="https://api.card-gorilla.com:8080/storage/card/2330/card_img/24131/2330card.png" />
          </div>
          <div>
            <div className="cardname">LOCA 365 카드</div>
            <div>롯데카드</div>
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
