import React from "react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Name = ({ setStep }: Props) => {
  return (
    <div>
      Name
      <button
        onClick={() => {
          setStep(3);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default Name;
