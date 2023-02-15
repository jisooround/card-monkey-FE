import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Name = ({ setStep }: Props) => {
  const form = useSelector((state: RootState) => state.form);
  console.log("Name  : ", form);

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
