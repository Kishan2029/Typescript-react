import React, { FC, useState, ChangeEvent } from "react";

export enum HairColor {
  Blonde = "Your hair color is blonde",
  Black = "Dark hair color",
  Pink = "Very Stylish color",
  Blue = "Please stop that",
}

interface Props {
  name?: string;
  email?: string;
  age: number;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, email, age, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  type NameType = "Jack" | "Mack";
  const nameForType: NameType = "Mack";
  return (
    <>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder="Enter the country name" onChange={handleChange} />
      <p>{country}</p>
      <br />
      <p>{hairColor}</p>
      <br />
      <p>{nameForType}</p>
    </>
  );
};
