import React from "react";
import { StyledPrimary } from "./Primary.styled";
import { Page } from "../../../Layout/Page";
import Slider from "../../../Components/Partials/Slider";

export const PrimaryTemplate = (props) => {
  return (
    <StyledPrimary>
      <Slider />
      <div>B</div>
      <Page title="Forside" description="Fed forside">
        {props.children}
      </Page>
      <div>D</div>
    </StyledPrimary>
  );
};

export default PrimaryTemplate;
