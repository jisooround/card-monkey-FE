import React from "react";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Password = ({ setStep }: Props) => {
  return (
    <div>
      Password
      <button
        onClick={() => {
          setStep(5);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default Password;
