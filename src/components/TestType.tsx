import React, { useState } from "react";

interface State {
  name: string;
  price: number;
}

// 최대한 같은 타입으로 이루어진 이넘을 사용하세요.
enum final {
  price = 1000,
  name = "park",
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

const arr: string[] = ["apple", "banana", "coconut"];

export default function TestType(): JSX.Element {
  const [item, setItem] = useState<State>({ name: "", price: 0 });
  const handlePrice = () => {
    setItem((prev) => ({ ...prev, price: prev.price + final.price }));
  };
  const handleName = () => {
    setItem((prev) => ({ ...prev, name: final.name as string })); // type casting
  };

  return (
    <div>
      <h3 onClick={handleName}>name : {item.name}</h3>
      <h4>{item.price}</h4>
      <button onClick={handlePrice}>+ {final.price}</button>
      {arr.map((el, idx) => (
        <h5 key={idx}>{el}</h5>
      ))}
    </div>
  );
}
