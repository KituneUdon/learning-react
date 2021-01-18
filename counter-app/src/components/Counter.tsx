import React, { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </>
  );
};

export default Counter;
