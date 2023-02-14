import styled from "styled-components";

export const HousesStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-gap: 2em;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile.value}) {
    grid-template-columns: 1fr;
  }
`;

export const HouseFigure = styled.figure`
  border: 1px solid grey;
  height: 30vh;
`;
