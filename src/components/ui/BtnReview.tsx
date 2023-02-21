import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

type Props = {
  text: string;
};

const BtnReview = ({ text }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev: boolean) => !prev);
  };

  return (
    <Button type="button" onClick={toggleActive}>
      {text}
    </Button>
  );
};

export default BtnReview;
