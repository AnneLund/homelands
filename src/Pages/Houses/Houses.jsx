import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../../Layout/Page";
import { HouseFigure, HousesStyled } from "./HousesStyled";

const Houses = () => {
  return (
    <Page title="Boliger til salg">
      <header>
        <h2>Boliger til salg</h2>
        <div>
          <label htmlFor="price-filter">Sortér efter prisniveau</label>
          <input id="price-filter" type="text" />
          <select defaultValue="">
            <option value="" disabled hidden>
              Sortér efter type
            </option>
          </select>
        </div>
      </header>
      <HousesStyled>
        <HouseFigure>
          <figcaption>Her er jeg</figcaption>
        </HouseFigure>
        <HouseFigure>
          <figcaption>Her er jeg</figcaption>
        </HouseFigure>
        <HouseFigure>
          <figcaption>Her er jeg</figcaption>
        </HouseFigure>
        <HouseFigure>
          <figcaption>Her er jeg</figcaption>
        </HouseFigure>
        <HouseFigure>
          <figcaption>Her er jeg</figcaption>
        </HouseFigure>
        <HouseFigure>
          <figcaption>Her er jeg</figcaption>
        </HouseFigure>
      </HousesStyled>
    </Page>
  );
};

export default Houses;
