import { ReactNode } from "react";

export type IndividualCharacter = {
  name: string;
  height: string | number;
  mass: string | number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string | number;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: [];
  starships: [];
  created: string;
  edited: string;
  url: string;
};
export type ItemType = { name: string; value: string | ReactNode };

export type ButtonPagination = {
  handlePageChange: (value: string | number) => void;
  text: string | number;
};
