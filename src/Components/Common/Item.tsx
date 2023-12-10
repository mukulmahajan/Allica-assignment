import { ItemType } from "../Types";

const Item = ({ name, value }: ItemType) => {
  return (
    <p>
      <strong>{name}:</strong>
      {value}
    </p>
  );
};

export default Item;
