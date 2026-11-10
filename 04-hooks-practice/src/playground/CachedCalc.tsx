import React, { useMemo, useState } from "react";
interface ChildComponentProps {
  name: string;
}

const ChildComponent = React.memo(({ name }: ChildComponentProps) => {
  console.log(`Change in Child Component`);
  return <h1>Hi my name is {name}</h1>;
});

export function Cachedcalc() {
  const [num, setNum] = useState<number>(0);
  const [name, setName] = useState<string>(`dev`);
  const [minus, setMinus] = useState<number>(1000);

  const haevyCalc = useMemo(() => {
    console.log(`Heavy calculation`);
    let sum: number = 0;
    for (let i = 0; i <= num; i++) {
      sum += num;
    }
    return sum;
  }, [num]);

  function handleMutate(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.currentTarget;
    if (name === "add") setNum((prev) => prev + 1);
    else if (name === "minus") setMinus((prev) => prev - 1);
  }

  return (
    <div>
      <h1>
        number {num}, minus : {minus}, heavycalc -- <i>depedndent on num</i> : {haevyCalc}
      </h1>
      <button name="add" onClick={handleMutate}>
        Mutate
      </button>
      <button name="minus" onClick={handleMutate}>
        Minus
      </button>


      {/* Child component will only change when we mutate the value of its props */}
      <input
        type="text"
        value={name}
        placeholder="...name(child component)"
        onChange={(e) => setName(e.target.value)}
      />
      <ChildComponent name={name} />
    </div>
  );
}
