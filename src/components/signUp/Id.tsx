import React from "react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Id = ({ setStep }: Props) => {
  return (
    <div>
      Id
      <button
        onClick={() => {
          setStep(4);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default Id;
