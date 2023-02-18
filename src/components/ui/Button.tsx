import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  fontColor: string;
  background: string;
};

const Button = ({ text, fontColor, background }: Props) => {
  return (
    <Click
      type="button"
      style={{ color: fontColor, backgroundColor: background }}
    >
      {text}
    </Click>
  );
};

const Click = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 90%;
  height: 55px;
  border: none;
  font-size: 15px;
  font-weight: 600;
`;

export default Button;
