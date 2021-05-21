import React, { useState, useRef } from "react";

interface Person {
  name: string;
  email: string;
  phone?: string;
}

interface Props {
  data: Array<Person>;
}

export const Home: React.FC<Props> = ({ data }) => {
  const [result, setResult] = useState(0);
  const fname = useRef<HTMLInputElement>(null);

  return (
    <>
      {data.map((el, i) => (
        <div key={i}>
          <span>Name: {el.name}</span>
          <span>Email: {el.email}</span>
          <span>Phone: {el.phone}</span>
        </div>
      ))}
      <div>
        <span>{result}</span>
        <button onClick={() => setResult(result + 1)}>Add</button>
        {result > 0 ? (
          <button onClick={() => setResult(result - 1)}>Remove</button>
        ) : (
          `${fname.current?.value} you dont have anything yet!`
        )}
      </div>
      <div>
        <input type="text" placeholder="first name" ref={fname} />
      </div>
    </>
  );
};
