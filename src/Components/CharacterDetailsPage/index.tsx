import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../Context/Characters";
import { IndividualCharacter } from "../Types";
import Item from "../Common/Item";
import "../style.css";

const CharacterDetails = () => {
  const { selectedId } = useParams();
  const { characters, updateCharacterDetails } = useContext(CharacterContext);
  const CharacterDetails = characters.find(
    (e: IndividualCharacter) => e.name === selectedId
  );
  const genderOptions = (
    <select
      value={CharacterDetails.gender}
      onChange={(e) => {
        updateCharacterDetails("gender", selectedId, e);
      }}
    >
      {["Male", "Female"].map((gender) => {
        return (
          <option value={gender.toLowerCase()} key={gender.toLowerCase()}>
            {gender}
          </option>
        );
      })}
    </select>
  );
  const height = (
    <input
      data-testid={"list-character-height"}
      type="number"
      value={CharacterDetails.height}
      onChange={(e) => {
        updateCharacterDetails("height", selectedId, e);
      }}
    />
  );
  return (
    <div className="individual-character-card-wrap">
      <div className="individual-character-card">
        <Item name={"Name"} value={CharacterDetails.name} />
        <Item name={"Hair color"} value={CharacterDetails.hair_color} />
        <Item name={"Eye color"} value={CharacterDetails.eye_color} />
        <Item name={"Homeworld"} value={CharacterDetails.homeworld} />
        <Item name={"Gender"} value={genderOptions} />
        <Item name={"Height"} value={height} />
        <Item
          name={"All Films"}
          value={
            <ul aria-label="films">
              {CharacterDetails.films.map((film: string) => {
                return <li key={film}>{film}</li>;
              })}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
