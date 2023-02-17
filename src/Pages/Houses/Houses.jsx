import React, { useState, useEffect, useMemo, useCallback } from "react";
import AppService from "../../Components/Appservices/Appservice";
import { RandomHousesStyled } from "../../Components/Partials/RandomHouses/RandomHousesStyled";
import { HousesStyled } from "./HousesStyled";
import { useForm } from "react-hook-form";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import Transitions from "../../Styles/Transition";
import { SortedHomes } from "./SortedHomes";
import { AllHomes } from "./AllHomes";

const Houses = () => {
  const [homes, setHomes] = useState([]);
  const { setFlashMessage } = useFlashMessageStore();
  const { reset } = useForm();
  const { userInfo } = useLoginStore();
  const sortedHomes = useMemo(() => homes, [homes]);
  const uniqueTypes = useMemo(() => [...new Set(homes?.map((item) => item.type))], [homes]);
  const [typeSelected, setTypeSelected] = useState(null);

  //Sorterer i hus-type
  const handleSortByType = useCallback(
    (event) => {
      const selectedType = event.target.value;
      setTypeSelected(selectedType);
      if (selectedType) {
        const sorted = homes.filter((item) => item.type === selectedType);
        setHomes(sorted);
      } else {
        setHomes(sortedHomes);
      }
    },
    [homes, sortedHomes]
  );

  //Sorterer i pris
  const handleSort = useCallback(
    (event) => {
      if (event.target.checked) {
        const sortedByPrice = [...homes].sort((a, b) => a.price - b.price);
        setHomes(sortedByPrice);
      } else {
        setHomes(sortedHomes);
      }
    },
    [homes, sortedHomes]
  );

  //Tilføjer favorit
  const handleFavoriteClick = useCallback(
    async (data) => {
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
    },
    [reset, setFlashMessage, userInfo.user_id]
  );

  //Tilføjer klik
  const handleUpdateClick = useCallback(async (id) => {
    try {
      await AppService.Patch(`homes/${id}`, { num_clicks: 1 });
    } catch (error) {
      console.error(error);
    }
  }, []);

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

  return (
    <Transitions>
      <HousesStyled>
        <header>
          <h2>Boliger til salg</h2>
          <div>
            <div>
              <label htmlFor="price">Sortér efter prisniveau</label>
              <input id="price" type="checkbox" onChange={handleSort} />
            </div>
            <select defaultValue="" onChange={handleSortByType}>
              <option value="">Sortér efter type</option>
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
          {typeSelected ? (
            <SortedHomes sortedHomes={sortedHomes} handleUpdateClick={handleUpdateClick} handleFavoriteClick={handleFavoriteClick} />
          ) : (
            <AllHomes homes={homes} handleUpdateClick={handleUpdateClick} handleFavoriteClick={handleFavoriteClick} />
          )}
        </RandomHousesStyled>
      </HousesStyled>
    </Transitions>
  );
};

export default Houses;
