import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { selectBenefit, submitForm, resetForm } from "../../store/signUpSlice";
import BenefitIcon from "../ui/BenefitIcon";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Benefit = ({ setStep }: Props) => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const [benefit, setBenefit] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);
  console.log("Benefit  : ", form);
  console.log(benefit);
  const benefits = [
    "coffee",
    "transportation",
    "movie",
    "delivery",
    "phone",
    "gas",
    "simplePayment",
    "tax",
    "shopping",
  ];

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleBenefit = (item: string) => {
    if (benefit.length === 3) {
      if (benefit.includes(item)) {
        setBenefit(benefit.filter((icon) => icon != item));
      }
      return;
    }
    if (!benefit.includes(item)) {
      setBenefit((prev) => [...prev, item]);
    } else {
      setBenefit(benefit.filter((icon) => icon != item));
    }
  };

  useEffect(() => {
    if (benefit.length === 3) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [benefit]);

  return (
    <Wrap>
      <h4>
        관심있는 카드 혜택을
        <br />
        3개 선택해주세요.
        <p>선택한 관심혜택은 몽키추천 서비스에 이용됩니다. 🐒 </p>
      </h4>
      <BenefitWrap>
        {benefits.map((item, idx) => {
          console.log(item);
          return (
            <div
              key={idx}
              className={benefit.includes(item) ? "select" : "icon"}
              onClick={() => {
                handleBenefit(item);
              }}
            >
              <BenefitIcon item={item} />
            </div>
          );
        })}
      </BenefitWrap>
      <Button
        disabled={!complete}
        onClick={() => {
          dispatch(selectBenefit(benefit));
          dispatch(submitForm());
          dispatch(resetForm());
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
  p {
    color: var(--color-gray);
    padding-top: 10px;
    font-size: 16px;
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

const BenefitWrap = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 10px;
  gap: 20px;
  grid-template-columns: repeat(3, 130px);
  grid-template-rows: repeat(3, 100px);
  place-items: center;
  .icon:hover {
    border: 1px solid var(--color-primary);
    border-radius: 20px;
  }
  .select {
    border: 1px solid var(--color-primary);
    border-radius: 20px;
    &:hover {
      border: 2px solid var(--color-primary);
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

export default Benefit;
