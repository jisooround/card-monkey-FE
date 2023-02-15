import React from "react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Benefit = ({ setStep }: Props) => {
  return (
    <div>
      Benefit
      <button
        onClick={() => {
          setStep(6);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default Benefit;
