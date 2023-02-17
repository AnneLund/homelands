import React from "react";
import House from "./House";

export const AllHomes = React.memo(({ homes, handleUpdateClick, handleFavoriteClick }) => {
  return homes.map((home) => <House key={home.id} home={home} handleUpdateClick={handleUpdateClick} handleFavoriteClick={handleFavoriteClick} />);
});
