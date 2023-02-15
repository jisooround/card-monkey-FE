import React, { useState } from "react";
import Agree from "../components/signUp/Agree";
import Benefit from "../components/signUp/Benefit";
import Complete from "../components/signUp/Complete";
import Id from "../components/signUp/Id";
import Name from "../components/signUp/Name";
import Password from "../components/signUp/Password";
import styled from "styled-components";

type Props = {};

const SignUp = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <Container>
      <Inner>
        <h3>회원가입</h3>
        <ProgressBar>
          <div style={{ width: `${step * 85}px` }}></div>
        </ProgressBar>
        {step === 1 && <Agree setStep={setStep} />}
        {step === 2 && <Name setStep={setStep} />}
        {step === 3 && <Id setStep={setStep} />}
        {step === 4 && <Password setStep={setStep} />}
        {step === 5 && <Benefit setStep={setStep} />}
        {step === 6 && <Complete />}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  position: relative;
  height: 100vh;
  width: 100%;
  justify-content: center;
  h3 {
    padding-top: 72px;
    padding-bottom: 43px;
    font-size: 28px;
    font-weight: 300;
  }
`;

const Inner = styled.div`
  width: var(--width-inner);
  height: auto;
  margin: auto;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  margin-bottom: 40px;
  background-color: var(--color-lightgray);
  div {
    height: 100%;
    background-color: var(--color-primary);
  }
`;

export default SignUp;
