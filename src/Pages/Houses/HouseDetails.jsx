import React from "react";
import { Page } from "../../Layout/Page";
import { Details } from "./DetailsStyled";

const HouseDetails = () => {
  return (
    <Page title="Detaljer">
      <Details>
        <header>
          <div>Noget text</div>
          <div>Ikoner</div>
          <div>Noget text</div>
        </header>
      </Details>
    </Page>
  );
};

export default HouseDetails;
