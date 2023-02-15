import React, { useState, useEffect } from "react";
import AppService from "../../Components/Appservices/Appservice";
import { RandomHousesStyled } from "../../Components/Partials/RandomHouses/RandomHousesStyled";
import useGetListItemsByEndPoint from "../../Components/Hooks/useGetListItemsByEndPoint";
import { HousesStyled } from "./HousesStyled";

const Houses = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const renderHomes = async () => {
      try {
        const response = await AppService.GetList("homes");
        if (response.data) {
          setHomes(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderHomes();
  }, []);

  const [sortedHomes, setSortedHomes] = useState(homes);

  const handleSort = (event) => {
    const value = event.target.value;

    // Sort homes by price in ascending order
    const sortedHomes = [...homes].sort((a, b) => {
      return a.price - b.price;
    });

    // Reverse sort order if value is "desc"
    if (value === "desc") {
      sortedHomes.reverse();
    }

    setSortedHomes(sortedHomes);
  };

  const energyLabelColors = {
    A: "green",
    B: "#94ff94",
    C: "#f2dc18",
    D: "#dea508",
    E: "#ff7818",
    F: "red",
    G: "purple",
  };

  //Jeg sørger for at jeg ikke får to af de samme typer i min select
  const uniqueTypes = [...new Set(homes?.map((item) => item.type))];

  const handleSortByType = (event) => {
    const selectedType = event.target.value;
    if (selectedType) {
      const sorted = homes.filter((item) => item.type === selectedType);
      setSortedHomes(sorted);
    } else {
      setSortedHomes(homes);
    }
  };

  console.log(sortedHomes);

  return (
    <HousesStyled>
      <header>
        <h2>Boliger til salg</h2>
        <div>
          <div>
            <label htmlFor="price-filter">Sortér efter prisniveau</label>
            <input id="price-filter" type="range" min="0" max="1" step="0.1" defaultValue="0" onInput={handleSort} />
          </div>
          <select defaultValue="default" onChange={handleSortByType}>
            <option value="default" disabled hidden>
              Sortér efter type
            </option>
            {uniqueTypes.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </header>

      <RandomHousesStyled
        style={{
          margin: "auto",
          width: "80vw",
          position: "relative",
          bottom: "0",
          zIndex: "0",
          minHeight: "70vh",
          display: "flex",
          flexWrap: "wrap",
        }}>
        {sortedHomes.map((home, i) => {
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
    </HousesStyled>
  );
};

export default Houses;
