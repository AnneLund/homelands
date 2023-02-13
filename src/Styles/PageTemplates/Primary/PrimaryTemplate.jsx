import React from "react";
import { StyledPrimary } from "./Primary.styled";
import { Page } from "../../../Layout/Page";
import Breadcrumbs from "../../../Components/Router/BreadCrumbs/Breadcrumbs";

export const PrimaryTemplate = (props) => {
  return (
    <StyledPrimary>
      <div>A</div>
      <div>B</div>
      <Page title="Forside" description="Fed forside">
        {props.children}
      </Page>
      <div>D</div>
    </StyledPrimary>
  );
};

export default PrimaryTemplate;
