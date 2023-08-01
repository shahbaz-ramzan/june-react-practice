import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "./redux/counterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      Counter
      <form>
        <h1>{count}</h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <input
          type="number"
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(incrementByValue(Number(count) + Number(value)));
          }}
        >
          IncrementByValue
        </button>
      </form>
    </div>
  );
}

export default Counter;
