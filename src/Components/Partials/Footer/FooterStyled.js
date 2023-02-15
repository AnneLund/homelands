import styled from "styled-components";

export const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme.colors.backgroundHeadNFoot};
  padding: 1em 5em;

  h2 {
    font-size: 1.3vw;
  }

  .info {
    display: flex;
    gap: 5em;
  }

  .some {
    margin-left: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: column;
    padding: 1em 0;

    .info {
      flex-direction: column;
      gap: 0;
    }

    .some {
      margin: 0;
    }
  }
`;
