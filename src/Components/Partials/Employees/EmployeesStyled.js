import styled from "styled-components";

export const EmployeesStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.4fr 0.5fr;
  grid-template-areas:
    "A A A A"
    "B B B B";

  h3 {
    grid-area: A;
    text-align: center;
  }

  article {
    grid-area: B;
    display: flex;
    justify-content: center;
    gap: 1em;

    figure {
      width: 300px;
      border: black solid 1px;
      position: relative;

      img {
        width: 100%;
        aspect-ratio: 1/1.3;
        object-fit: fill;
      }
    }

    figcaption {
      background-color: #ffffff99;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 1em;
    }

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      display: flex;
      flex-direction: column;

      figure {
        width: 200px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 2em;
    }
  }
`;
