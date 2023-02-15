import React from "react";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

type Props = {};

const ReduxTest = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxTest;
