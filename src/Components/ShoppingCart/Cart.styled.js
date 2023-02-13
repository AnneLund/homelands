import styled from "styled-components";

export const Cart = styled.figure`
  display: grid;
  grid-template-columns: 0.3fr 0.2fr 0.2fr 0.5fr;
  height: fit-content;
  align-items: center;
  border: 1px grey solid;
  margin: 0 auto;

  picture {
    width: fit-content;
    padding: 0.5em;
  }
  img {
    width: 15vw;
    margin: 0;
    transform: rotate(-90deg);
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  figcaption {
    display: flex;
    padding: 1em;
    position: relative;

    h2 {
      font-size: 1.7em;
      margin-bottom: 1em;
      width: 100%;
    }

    h5 {
      position: absolute;
      bottom: 0;
      margin-left: 30px;
    }

    p {
      font-size: 0.8em;
      margin-bottom: 0.5em;
      color: black;
      border: 0.5px white solid;
    }

    .button {
      padding: 1em;
      background-color: ${(props) => props.theme.colors.button2};
      cursor: pointer;
    }

    #delete {
      background-color: ${(props) => props.theme.colors.button1};
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;
