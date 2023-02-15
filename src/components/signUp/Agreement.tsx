import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import styled from "styled-components";
import { fillAgreement } from "../../store/signUpSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Agreement = ({ setStep }: Props) => {
  const form = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  console.log(agree);
  console.log("Agreement  : ", form);
  return (
    <Wrap>
      <h4>
        카드몽키 서비스 이용약관에
        <br />
        동의해주세요.
      </h4>
      <InputWrap>
        <div className="allCheck">
          <input
            type="checkbox"
            id="allCheck"
            checked={agree}
            onChange={(e) => {
              setAgree(!agree);
            }}
          />
          <p>모두 동의</p>
        </div>
      </InputWrap>
      <Button
        disabled={!agree}
        onClick={() => {
          setStep(2);
          dispatch(fillAgreement());
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

const Button = styled.button`
  border: none;
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
  &:disabled {
    background-color: var(--color-gray);
  }
`;

const InputWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dfdffa;
  .allCheck {
    display: flex;
    align-items: center;
  }
`;

export default Agreement;
