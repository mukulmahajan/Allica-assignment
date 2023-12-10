import { useEffect, useState } from "react";
import { CharacterContext } from "./Context/Characters";
import { CHAR_DETAILS_URL } from "./Constants";
import CharacterDetails from "./Components/CharacterDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndividualCharacter } from "./Components/Types";
import Dashboard from "./Components/Dashboard";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState<IndividualCharacter[]>([]);
  const [nextPossible, setNextPossible] = useState(false);
  const [backPossible, setBackPossible] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      try {
        setCharacters([]);
        const response = await axios.get(`${CHAR_DETAILS_URL}${pageNum}`);
        setCharacters(response.data.results);
        setNextPossible(response.data.next);
        setBackPossible(response.data.previous);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [pageNum]);

  const updateCharacterDetails = (
    type: string,
    selectedId: string,
    event: { target: { value: string } }
  ) => {
    setCharacters([
      ...characters.map((character: IndividualCharacter) => {
        if (character.name === selectedId) {
          return { ...character, [type]: event.target.value };
        }
        return character;
      }),
    ]);
  };
  return (
    <CharacterContext.Provider
      value={{
        characters,
        updateCharacterDetails,
        pageNum,
        setPageNum,
        nextPossible,
        backPossible,
      }}
    >
      <Router>
        <Routes>
          <Route path="/:selectedId" element={<CharacterDetails />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </CharacterContext.Provider>
  );
}

export default App;
