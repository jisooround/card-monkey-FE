import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

interface BackButtonProps {
  color?: string;
}

export default function Back({ color }: BackButtonProps) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <Button className={"button"} type="button" onClick={clickHandler}>
      <IoIosArrowBack style={{ width: 25, height: 25 }} />
    </Button>
  );
}

const Button = styled.button`
  background-color: inherit;
  border: none;
  color: ${(props) => props.color || "var(--color-primary)"};
  cursor: pointer;
`;
