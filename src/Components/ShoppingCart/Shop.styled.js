import styled from "styled-components";

export const Shop = styled.section`
  text-align: center;
  width: 60%;
  margin: 0 auto;

  h2 {
    margin: 1em;
  }

  article {
    width: 20vw;
    margin-left: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    button {
      width: 50%;
      margin-left: auto;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    article {
      width: 100%;
      margin-top: 2em;
      button {
        margin-bottom: 1em;
      }
    }
  }
`;
