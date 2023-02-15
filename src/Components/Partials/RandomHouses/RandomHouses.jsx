import React, { useState, useEffect } from "react";
import useGetListItemsByEndPoint from "../../Hooks/useGetListItemsByEndPoint";
import { RandomHousesStyled } from "./RandomHousesStyled";

const RandomHouses = () => {
  const { state: homes } = useGetListItemsByEndPoint("homes");
  const [randomHomes, setRandomHomes] = useState([]);

  //Jeg tjekker om homes og homes.items eksisterer, inden jeg tilgår det.
  useEffect(() => {
    if (homes && homes.items) {
      const shuffledHomes = homes.items
        .sort(() => 0.5 - Math.random()) // blander objekterne i mit array
        .slice(0, 3); // tager de 3 første i mit array
      setRandomHomes(shuffledHomes);
    }
  }, [homes]);

  const energyLabelColors = {
    A: "green",
    B: "#94ff94",
    C: "#f2dc18",
    D: "#dea508",
    E: "#ff7818",
    F: "red",
    G: "purple",
  };

  return (
    <RandomHousesStyled>
      {randomHomes?.map((home, i) => {
        const background = energyLabelColors[home.energy_label_name] || "transparent";

        return (
          <figure key={i}>
            <picture>
              <img src={home.images[1].filename.medium} alt={home.description} />
            </picture>
            <figcaption>
              <h3>{home.address}</h3>
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
      })}
    </RandomHousesStyled>
  );
};

export default RandomHouses;
