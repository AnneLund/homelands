import React, { useState, useEffect } from "react";
import AppService from "../../Components/Appservices/Appservice";
import { RandomHousesStyled } from "../../Components/Partials/RandomHouses/RandomHousesStyled";
import { HousesStyled } from "./HousesStyled";
import { FiHeart } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useModalStore } from "../../Components/Modal/useModalStore";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";

const Houses = () => {
  const [homes, setHomes] = useState([]);
  const [sortedHomes, setSortedHomes] = useState(homes);
  const { setToggleModal } = useModalStore();
  const { setFlashMessage } = useFlashMessageStore();
  const [typeSelected, setTypeSelected] = useState(false);

  const { reset } = useForm();
  const { userInfo } = useLoginStore();

  const sortHomesByPriceAscending = (a, b) => {
    return a.price - b.price;
  };

  const handleSort = (event) => {
    const newPrice = parseFloat(event.target.value);
    const sorted = homes.sort(newPrice === 0 ? sortHomesByPriceAscending : sortHomesByPriceAscending);
    setSortedHomes(sorted);
  };

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

  //Farver til energimærkerne

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
      setTypeSelected(true);
    } else {
      setSortedHomes(homes);
      setTypeSelected(false);
    }
  };

  //poster min favorit til min bruger

  const handleFavoriteClick = async (data) => {
    const postData = {
      user_id: userInfo.user_id,
      home_id: data,
    };

    try {
      const response = await AppService.Create("favorites", postData);
      if (response.status) {
        setFlashMessage("Tilføjet din favorit-liste!");

        reset();
      }
    } catch (error) {
      if (error) {
        setFlashMessage("Du har allerede tilføjet denne bolig til dine favoritter!");
      }
      console.error(error);
    }
  };

  return (
    <HousesStyled>
      <header>
        <h2>Boliger til salg</h2>
        <div>
          <div>
            <label htmlFor="price">Sortér efter prisniveau</label>
            <input id="price" type="checkbox" onInput={handleSort} />
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
        {typeSelected
          ? sortedHomes.map((home) => {
              const background = energyLabelColors[home.energy_label_name] || "transparent";
              return (
                <figure key={home.id}>
                  <Link to={`/boliger/${home.id}`}>
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
            })
          : homes.map((home) => {
              const background = energyLabelColors[home.energy_label_name] || "transparent";
              return (
                <figure key={home.id}>
                  <Link to={`/boliger/${home.id}`}>
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
            })}
      </RandomHousesStyled>
    </HousesStyled>
  );
};

export default Houses;
