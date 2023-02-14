import styled from "styled-components";

export const SearchResults = styled.article`
  color: white;
  padding: 1em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  button {
    position: absolute;
    top: -10vh;
    right: 50px;
    padding: 1em;
  }

  figure {
    display: flex;
    justify-content: center;
    picture {
      width: 300px;
      margin: 0;
      padding: 0;
    }

    img {
      width: 300px;
      height: 250px;
      aspect-ratio: 1/1;
      object-fit: contain;
    }

    figcaption {
      padding: 3em;
    }
  }
`;
