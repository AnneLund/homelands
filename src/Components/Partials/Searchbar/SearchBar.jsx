import React, { useState, useEffect } from "react";
import { Input } from "../../../Styles/PartialsStyled/InputStyled";
import { BiSearch } from "react-icons/bi";
import { useModalStore } from "../../Modal/useModalStore";
import { SearchBarStyled } from "./SearchStyled";
import { SearchResults } from "./SearchResults";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { setModalPayload, setToggleModal } = useModalStore();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setSearchResults([]);

    if (buttonClicked) {
      fetch(`https://api.mediehuset.net/homelands/search/${searchTerm}`)
        .then((res) => res.json())

        .then((data) => {
          setSearchResults(data.items);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetch("https://api.mediehuset.net/homelands/homes")
      .then((res) => res.json())
      .then((data) => setSearchResults(data.items));
  }, []); // empty dependency array

  const handleClick = () => {
    setButtonClicked(true);
    setModalPayload(
      <SearchResults>
        <button onClick={() => setToggleModal("none")}>X</button>
        {searchResults.map((result, index) => (
          <figure key={index}>
            <picture>
              <img src={result.images[0].filename.medium} alt={result.images[0].description} />
            </picture>

            <figcaption>
              <p> {result.address}</p>
              <p>
                {result.zipcode}, {result.city}
              </p>

              <p>{result.type}</p>
            </figcaption>
          </figure>
        ))}
      </SearchResults>
    );
  };

  return (
    <>
      <SearchBarStyled>
        <div>
          <Input placeholder="Indtast søgeord" type="text" value={searchTerm} onChange={handleChange} />

          <button onClick={handleClick}>
            <BiSearch fill="white" size={22} />
          </button>
        </div>
      </SearchBarStyled>
    </>
  );
};

export default SearchBar;
