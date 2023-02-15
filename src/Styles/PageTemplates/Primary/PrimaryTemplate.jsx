import React from "react";
import { StyledPrimary } from "./Primary.styled";
import Slider from "../../../Components/Partials/Slider/Slider";
import RandomHouses from "../../../Components/Partials/RandomHouses/RandomHouses";
import Review from "../../../Components/Partials/Review/Review";
import Employees from "../../../Components/Partials/Employees/Employees";

export const PrimaryTemplate = (props) => {
  return (
    <StyledPrimary>
      <Slider />
      <RandomHouses />
      <Review />
      <Employees />
    </StyledPrimary>
  );
};

export default PrimaryTemplate;
