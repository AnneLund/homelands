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

      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        flex-direction: column;
      }
    }

    .artDetails {
      padding-top: 2em;
      display: flex;
      justify-content: center;

      figure {
        display: flex;
        div {
          display: flex;
          width: 50%;
          margin: 0 2.5vw;
          flex-direction: column;
        }

        @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
          justify-content: center;
        }
      }

      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        flex-direction: column;
        justify-content: center;
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

      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        flex-direction: column;
        justify-content: space-between;
        div {
          width: 100%;
          margin-bottom: 1em;
        }
      }
    }
    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      top: 0;
      width: 100%;
      margin: 1em auto;
    }
  }
`;
