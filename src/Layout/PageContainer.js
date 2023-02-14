import styled from "styled-components";

export const PageContainer = styled.section`
  padding: 12em 2em 0 2em;

  h3 {
    font-weight: 100;
    font-size: 1em;
    margin-top: 0.5em;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    input,
    select {
      margin: 0 2em;
      width: 15vw;
    }

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column;
      gap: 1em;
      input,
      select {
        margin: 0.5em 0;
        width: 100%;
      }
    }
  }
`;
