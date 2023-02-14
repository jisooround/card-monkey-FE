import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  benefit: string;
};

const BtnBenefit = ({ benefit }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Benefit className={isActive ? "active" : ""} onClick={toggleActive}>
      {benefit}
    </Benefit>
  );
};

const Benefit = styled.button`
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

export default BtnBenefit;
