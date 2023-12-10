import { useContext } from "react";
import { CharacterContext } from "../../Context/Characters";
import { Pagination } from "../Common/Paginations";
import SingleCharacterCard from "./SingleCharacterCard";
import { IndividualCharacter } from "../Types";
import "../style.css";

const Dashboard = () => {
  const { characters } = useContext(CharacterContext);

  return characters.length > 0 ? (
    <div className="dashboard">
      <div className="character-list-view" data-testid={'all-characters-list'}>
        {characters.map((list: IndividualCharacter) => (
          <SingleCharacterCard cardDetails={list} key={`${list.name}-card`} />
        ))}
      </div>
      <Pagination />
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
};
export default Dashboard;
