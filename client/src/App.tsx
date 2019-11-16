import React, { DependencyList, useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";

const App = () => {
  const [counter, setCounter] = useState(0);

  useKeyDown({
    keyCode: 38,
    cb: () => setCounter(counter + 1),
    deps: [counter]
  });
  useKeyDown({
    keyCode: 40,
    cb: () => setCounter(counter - 1),
    deps: [counter]
  });

  return (
    <div>
      <h1>{counter}</h1>
      <h1>introduction to webpack configuration</h1>
      <ol>
        <li>It should work</li>
        <li>It should run</li>
        <li>It should automatically reload</li>
        <li>It should be fast</li>
        <li>The quick brown fox</li>
        <li>The quick brown fox</li>
        <li>The quick brown fox</li>
        <li>The quick brown fox</li>
        <li>The quick brown fox</li>
      </ol>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
};

export default hot(App);

interface KeyDown {
  keyCode: number;
  cb: (...args: any) => void;
  deps: DependencyList;
}

type KeyFn = (props: KeyDown) => void;
const useKeyDown: KeyFn = ({ keyCode, cb, deps }) => {
  const handleKeyDown = (e: KeyboardEvent) => e.keyCode == keyCode && cb();
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, deps);
};
