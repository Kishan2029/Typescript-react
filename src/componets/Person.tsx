import React, { FC, useState, ChangeEvent } from "react";

interface Props {
  name?: string;
  email?: string;
  age: number;
}

export const Person: FC<Props> = ({ name, email, age }) => {
  const [country, setCountry] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder="Enter the country name" onChange={handleChange} />
      <p>{country}</p>
    </>
  );
};
