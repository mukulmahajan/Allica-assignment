import { fireEvent, render, screen } from "@testing-library/react";
import { CharacterContext } from "../../Context/Characters";
import Dashboard from ".";
import { BrowserRouter } from "react-router-dom";

const characters = [
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/44/",
      "https://swapi.dev/api/vehicles/46/",
    ],
    starships: [
      "https://swapi.dev/api/starships/39/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/65/",
    ],
    created: "2014-12-10T16:20:44.310000Z",
    edited: "2014-12-20T21:17:50.327000Z",
    url: "https://swapi.dev/api/people/11/",
  },
  {
    name: "Wilhuff Tarkin",
    height: "180",
    mass: "unknown",
    hair_color: "auburn, grey",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "64BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/21/",
    films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/6/"],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-10T16:26:56.138000Z",
    edited: "2014-12-20T21:17:50.330000Z",
    url: "https://swapi.dev/api/people/12/",
  },
];

test("renders All Characters from context", () => {
  render(
    <CharacterContext.Provider
      value={{
        characters: characters,
        backPossible: true,
        nextPossible: true,
        setPageNum: jest.fn,
      }}
    >
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </CharacterContext.Provider>
  );
  const charactersRendered = screen.getByTestId("all-characters-list");
  expect(charactersRendered.childNodes.length).toBe(2);

  const button = screen.getAllByRole("button");
  expect(button.length).toBe(3);
  fireEvent.click(button[0]);
  fireEvent.click(button[2]);
});
test("renders Loading when character length is zero", () => {
  render(
    <CharacterContext.Provider
      value={{ characters: [], updateCharacterDetails: () => {} }}
    >
      <Dashboard />
    </CharacterContext.Provider>
  );
  const loading = screen.getByText("Loading...");
  expect(loading).toBeInTheDocument();
});
