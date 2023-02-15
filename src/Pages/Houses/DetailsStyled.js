import styled from "styled-components";

export const DetailsHeader = styled.header`
  height: 50vh;
`;

export const Details = styled.section`
  article {
    width: 80%;
    background-color: #ffffffb4;
    border: 1px grey solid;
    margin: 0 auto;
    padding: 1em;
    position: relative;
    top: -8em;
    header {
      display: flex;
      justify-content: space-between;
      div {
        color: black;
        line-height: 25px;
      }

      .icons {
        display: flex;
        justify-content: space-between;
        width: 200px;
      }
    }

    .artDetails {
      padding: 2em;
      display: flex;
      justify-content: space-between;
      figure {
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          p {
            margin-right: 5em;
          }
        }
      }

      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        flex-direction: column;
      }
    }

    footer {
      margin-top: 5em;
      display: flex;
      justify-content: space-between;
      div {
        width: 30%;
        margin: 0 auto;
      }
      figure {
        margin: 0 auto;
        h5 {
          font-size: 2em;
        }
        img {
          aspect-ratio: 1/1;
          object-fit: contain;
        }

        figcaption {
          h6 {
            font-size: 1em;
          }
        }
      }
    }
  }
`;
