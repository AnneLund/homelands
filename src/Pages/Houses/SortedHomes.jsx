import React from "react";
import House from "./House";

export const SortedHomes = React.memo(({ sortedHomes, handleUpdateClick, handleFavoriteClick }) => {
  return sortedHomes.map((home) => (
    <House key={home.id} home={home} handleUpdateClick={handleUpdateClick} handleFavoriteClick={handleFavoriteClick} />
  ));
});
