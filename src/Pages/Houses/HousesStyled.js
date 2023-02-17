import styled from "styled-components";

export const HousesStyled = styled.section`
  padding-top: 30vh;
  margin-bottom: 2em;

  header {
    margin-bottom: 3em;
    display: flex;
    justify-content: space-between;
    padding: 1em 3em;
    div {
      display: flex;
      gap: 1em;
      align-items: center;
    }
  }

  h3 {
    display: flex;
    justify-content: space-between;

    span {
      cursor: pointer;
    }
  }

  figure {
    cursor: pointer;
    height: fit-content;
  }
`;
