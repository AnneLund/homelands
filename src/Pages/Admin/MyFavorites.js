import styled from "styled-components";

export const MyFavorites = styled.article`
  padding: 2em;
  position: relative;
  width: 40vw;
  background-color: #ffffff8b;
  overflow-y: scroll;

  h2 {
    margin-bottom: 1em;
  }

  figure {
    background-color: #ffffff5b;
    padding: 1em;
    display: flex;
    align-items: center;
    margin: 1em auto;
    justify-content: space-between;
    gap: 1em;
  }
  img {
    width: 20%;
  }
`;
