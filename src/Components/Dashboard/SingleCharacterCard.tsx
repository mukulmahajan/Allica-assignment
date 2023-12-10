import { Link } from "react-router-dom";
import { IndividualCharacter } from "../Types";
import Item from "../Common/Item";
import "../style.css";

const SingleCharacterCard = ({
  cardDetails,
}: {
  cardDetails: IndividualCharacter;
}) => {
  const { name, gender, homeworld } = cardDetails;
  return (
    <div className="card-wrapper">
      <Item name={"Name"} value={name} />
      <Item name={"Gender"} value={gender} />
      <Item name={"HomeWorld"} value={homeworld} />
      <Link to={`/${name}`}>Detail View</Link>
    </div>
  );
};
export default SingleCharacterCard;
