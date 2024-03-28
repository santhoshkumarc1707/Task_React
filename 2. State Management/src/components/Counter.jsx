import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => Increment()}>Increment</button>
      <button onClick={() => Decrement()}>Decrement</button>
      <button onClick={() => Reset()}>Reset</button>
    </div>
  );
};

export default CounterComponent;
