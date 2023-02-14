import styled from "styled-components";

export const AdminStyled = styled.section`
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  height: 100%;
  article {
    width: 100%;
    padding: 0 1em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-areas:
      "A A A"
      "B B B"
      "C C C";

    h2 {
      grid-area: A;
    }

    h3 {
      grid-area: B;
    }

    table {
      width: 100%;
      overflow-x: auto;
      margin: 1em auto;
      grid-area: C;
      thead,
      tbody {
        text-align: left;
      }
      th,
      td {
        border-bottom: 1px grey solid;
        padding: 0.5em 0;
        width: 25%;
      }

      button {
        border: none;
        background-color: white;
        margin-right: 1em;
      }

      .red {
        color: green;
      }

      .delete {
        color: red;
      }
    }

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }

  div {
    width: 100%;
    height: 80%;
    padding: 1em;
    margin: 0 1em;
    border-left: #70707090 solid 2px;
    h4 {
      margin-bottom: 1em;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
