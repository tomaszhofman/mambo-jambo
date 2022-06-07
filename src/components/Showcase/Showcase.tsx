import React from "react";
import { useFetchCharacters } from "./useFetchCharacters";

const Showcase = () => {
  const [characters, status] = useFetchCharacters();

  const showCharacters = status !== "error" || "loading";

  console.log(characters, status);
  return (
    <div>
      {!showCharacters ? (
        <div>loading</div>
      ) : (
        <div>
          {characters?.map((el) => (
            <div>{el.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Showcase;
