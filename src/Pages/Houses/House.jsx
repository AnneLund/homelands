import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const House = ({ home, handleUpdateClick, handleFavoriteClick }) => {
  const energyLabelColors = useMemo(
    () => ({
      A: "green",
      B: "#94ff94",
      C: "#f2dc18",
      D: "#dea508",
      E: "#ff7818",
      F: "red",
      G: "purple",
    }),
    []
  );

  const background = energyLabelColors[home.energy_label_name] || "transparent";

  return (
    <figure key={home.id}>
      <Link onClick={() => handleUpdateClick(home.id)} to={`/boliger/${home.id}`}>
        <picture>
          <img src={home.images[1].filename.medium} alt={home.description} />
        </picture>
      </Link>

      <figcaption>
        <h3>
          {home.address}
          <span>
            <FiHeart onClick={() => handleFavoriteClick(home.id)} size={20} />
          </span>
        </h3>
        <p>
          {home.zipcode} {home.city}
        </p>
        <p>{home.type}</p>
        <div>
          <footer>
            <p>
              <span style={{ background }}> {home.energy_label_name}</span> {home.num_rooms} værelser, {home.floor_space}m&#178;
            </p>
            <p className="price">{home.price} DKK</p>
          </footer>
        </div>
      </figcaption>
    </figure>
  );
};

export default House;
