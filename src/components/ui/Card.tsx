import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  id: string;
  image: string;
  name: string;
  company: string;
};

const Card = ({ favorCard }: Props) => {
  return (
    <MyCard to={"/detail/" + favorCard.id} className={favorCard.id}>
      <div className="box">
        <div className="circle">
          <img src={favorCard.image} />
        </div>
        <div>
          <div className="card-name">{favorCard.name}</div>
          <div>{favorCard.company}</div>
        </div>
      </div>
    </MyCard>
  );
};

const MyCard = styled(Link)`
  text-decoration: none;
  .box {
    height: 135px;
    padding: 0 30px;
    border: 1px solid var(--color-gray);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    font-size: 13px;
    color: black;
    cursor: pointer;
    :hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
    }
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
  .card-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

export default Card;
