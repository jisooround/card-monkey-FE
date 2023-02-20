import React from "react";
import styled from "styled-components";

type Props = {};

const CardSkeleton = (props: Props) => {
  return (
    <CardContainer>
      <CardImageWrapper>
        <div className="circle"></div>
        <img />
      </CardImageWrapper>
      <CardInfo>
        <div className="wrapper">
          <div className="name"></div>
          <div className="company"></div>
          <div></div>
        </div>
      </CardInfo>
      <div>{/* <AiFillHeart /> */}</div>
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
      color: var(--color-primary);
    }
    &:hover {
      svg {
        transform: scale(1.3);
      }
    }
  }
`;

const CardImageWrapper = styled.div`
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
  .type {
    display: inline-block;
    border-radius: 40px;
    font-size: 10px;
    font-weight: bold;
    padding: 7px;
    text-align: center;
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

export default CardSkeleton;
