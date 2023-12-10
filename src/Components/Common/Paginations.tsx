import { useContext } from "react";
import { ButtonPagination } from "../Types";
import { CharacterContext } from "../../Context/Characters";

export const Pagination = () => {
  const { pageNum, setPageNum, backPossible, nextPossible } =
    useContext(CharacterContext);
  const handlePageChange = (value: string | number) => {
    if (value === "back") {
      setPageNum((prev: number) => prev - 1);
    }
    if (value === "next") {
      setPageNum((prev: number) => prev + 1);
    }
  };

  return (
    <div className="pagination">
      {backPossible && (
        <Button handlePageChange={handlePageChange} text={"back"} />
      )}
      <Button handlePageChange={() => {}} text={pageNum} />
      {nextPossible && (
        <Button handlePageChange={handlePageChange} text={"next"} />
      )}
    </div>
  );
};

const Button = ({ handlePageChange, text }: ButtonPagination) => {
  return (
    <button
      onClick={() => {
        handlePageChange(text);
      }}
      value={text}
    >
      {text}
    </button>
  );
};
