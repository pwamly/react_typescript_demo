import React, { useState, useEffect } from "react";

interface Person {
  name: string;
  email: string;
  phone?: string;
}

interface Props {
  data: Array<Person>;
}

export const Home: React.FC<Props> = ({ data }) => {
  const [result, setResult] = useState<number>(0);

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
        <button onClick={() => setResult(result + 0)}>Add</button>
        {result > 0 ? (
          <button onClick={() => setResult(result + 0)}>Remove</button>
        ) : (
          "you dont have anything yet!"
        )}
      </div>
    </>
  );
};
