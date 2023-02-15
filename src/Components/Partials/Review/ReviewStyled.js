import styled from "styled-components";

export const CustomerReview = styled.article`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: 0.49fr 1fr;
  grid-template-areas:
    "A"
    "B";

  h3 {
    grid-area: A;
    margin: 0;
  }

  blockquote {
    background-color: ${(props) => props.theme.colors.sectionColor};
    padding: 2em;
    grid-area: B;

    h4 {
      margin-bottom: 0.5em;
      font-size: 1.2em;
    }

    .author {
      font-size: 0.8em;
      margin: 1em;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    display: flex;
    flex-direction: column;

    blockquote {
      margin: 1em auto;
      padding: 1em;
      width: 100%;
    }
  }
`;
