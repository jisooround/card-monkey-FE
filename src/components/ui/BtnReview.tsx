import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

type Props = {
  text: string;
};

const BtnReview = ({ text }: Props) => {
  const selectedReview = useSelector(
    (state: RootState) => state.review.message,
  );

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev: boolean) => !prev);
  };

  return (
    <Button
      type="button"
      className={isActive || selectedReview.includes(text) ? "active" : ""}
      onClick={toggleActive}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
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

export default BtnReview;
