import React, { FC } from "react";

interface Props {
  name?: string;
  email?: string;
  age: number;
}

export const Person: FC<Props> = ({ name, email, age }) => {
  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
      <div>{age}</div>
    </>
  );
};
