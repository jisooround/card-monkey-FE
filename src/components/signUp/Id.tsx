import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { fillId } from "../../store/signUpSlice";
import { BsCheckCircle } from "react-icons/bs";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Id = ({ setStep }: Props) => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState(false);
  console.log("Id  : ", form);
  const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,14}$/;

  useEffect(() => {
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  }, [id]);

  const handleChange = (value) => {
    setId(value);
  };
  return (
    <Wrap>
      <h4>
        로그인에 사용할
        <br />
        아이디를 입력해주세요.
      </h4>
      <InputWrap>
        <div className="group">
          <div className="inputTitle">아이디</div>
          <input
            type="text"
            id="id"
            placeholder="아이디를 입력하세요."
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
        <ValidConditions className={idValid && id.length > 0 && "satisfaction"}>
          <p>5~12자 영문, 숫자 조합</p>
          <BsCheckCircle className="icon" />
        </ValidConditions>
      </InputWrap>
      <Button
        disabled={!idValid}
        onClick={() => {
          dispatch(fillId(id));
          setStep(4);
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
  font-weight: 600;
  font-size: 15px;
  color: var(--color-white);
  cursor: pointer;
  transition: 0.3s;
  &:disabled {
    background-color: var(--color-gray);
    transition: 0.2s;
  }
`;

const InputWrap = styled.div`
  .group {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
    align-items: center;
    border-bottom: 1px solid var(--color-gray);
    font-size: 14px;
    .inputTitle {
      width: 20%;
      font-weight: 600;
      padding-right: 20px;
    }
    input {
      width: 100%;
      height: 30px;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
`;

const ValidConditions = styled.div`
  display: flex;
  font-size: 14px;
  width: 100%;
  color: var(--color-gray);
  .icon {
    padding: 0 15px 0 3px;
  }
  &.satisfaction {
    color: green;
  }
`;
export default Id;
