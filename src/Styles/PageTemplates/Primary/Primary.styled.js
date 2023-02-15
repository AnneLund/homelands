import styled from "styled-components";

const All = `
width: 100%;

`;

export const StyledPrimary = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 2fr auto auto;
  grid-template-areas:
    "A"
    "B"
    "C"
    "D";

  @media all and (min-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    grid-template-columns: 0.5fr repeat(3, 1fr);
    grid-template-rows: 1fr repeat(2, 0.5fr) 1fr;
    grid-template-areas:
      "A A A A"
      "B B C C"
      "B B C C"
      "D D D D";
  }

  @media all and (min-width: ${(props) => props.theme.breakPoints.desktop.value}) {
    grid-template-columns: 0.5fr repeat(3, 1fr);
    grid-template-rows: 1fr 0.5fr 0.1fr 1fr;
    grid-template-areas:
      "A A A A"
      "B B B B"
      "C C C C"
      "D D D D";
  }

  > :nth-child(1) {
    grid-area: A;
    ${All}
  }

  > :nth-child(2) {
    grid-area: B;
    ${All}
  }

  > :nth-child(3) {
    grid-area: C;
    ${All}
  }

  > :nth-child(4) {
    grid-area: D;
    ${All}
  }
`;
