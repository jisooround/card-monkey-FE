import React, { useState } from "react";
import styled from "styled-components";
import checkSVG from "../../assets/svg?url";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Agree = ({ setStep }: Props) => {
  const [agree, setAgree] = useState("");
  return (
    <Wrap>
      <h4>
        카드몽키 서비스 이용약관에
        <br />
        동의해주세요.
      </h4>
      <InputWrap>
        <div className="allCheck">
          <input type="checkbox" id="allCheck" />
          <label htmlFor="allcheck">
            <img src={checkSVG} alt="" />
          </label>
          <p>모두 동의</p>
        </div>
      </InputWrap>
      <Button
        onClick={() => {
          setStep(2);
        }}
      >
        동의
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 600px;
  width: 100%;
  /* background-color: aqua; */
  h4 {
    padding-bottom: 43px;
    font-size: 26px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--color-black);
  }
`;

const Button = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 -37.5px;
  width: 500px;
  height: 70px;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  color: var(--color-white);
  cursor: pointer;
`;

const InputWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dfdffa;
  .allCheck {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      display: none;
    }
    input[type="checkbox"] + label {
      width: 15px;
      height: 15px;
      /* background-image: url("./check.svg");
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center; */
      border: 1px solid var(--color-gray);
    }
  }
`;

export default Agree;
