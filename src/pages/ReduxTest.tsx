import React, { useEffect } from "react";
import type { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import { fetchFavor } from "../store/favorSlice";

type Props = {};

const ReduxTest = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const favorList = useSelector((state: RootState) => state.favor);
  const dispatch = useDispatch<AppDispatch>();

  dispatch(fetchFavor());

  useEffect(() => {
    setTimeout(() => console.log(favorList), 3000);
  }, [favorList]);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxTest;
