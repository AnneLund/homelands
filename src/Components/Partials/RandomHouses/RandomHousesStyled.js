import styled from "styled-components";

export const RandomHousesStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 2em;
  position: relative;
  bottom: 7vh;
  z-index: 500;

  figure {
    padding: 1em;
    background-color: #fff7;
    border-radius: 5px;

    picture {
      width: 100%;
    }
    img {
      width: 300px;
      height: 250px;
      aspect-ratio: 1/1;
      object-fit: fill;
    }

    figcaption {
      padding: 1em 0;
      h3 {
        margin-bottom: 0.8em;
      }
      div {
        display: flex;
        justify-content: space-between;
      }

      footer {
        font-size: 0.8em;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 0.5em;
        span {
          text-align: center;
          padding: 1px 5px;
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile.value}) {
    flex-direction: column;
    bottom: 0;

    figure {
      margin: 0 auto;
    }
  }
`;
