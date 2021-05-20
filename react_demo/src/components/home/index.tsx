import React from "react";

interface Object {
  name: string;
  email: string;
  phone?: string;
}

interface Props {
  data: Array<Object>;
}

export const Home: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((el, i) => (
        <div key={i}>
          <span>Name: {el.name}</span>
          <span>Email: {el.email}</span>
          <span>Phone: {el.phone}</span>
        </div>
      ))}
    </>
  );
};
