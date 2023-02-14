import styled from "styled-components";

export const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    display: flex;
    width: 100%;
    position: relative;

    //Søge-ikon
    button {
      background-color: #999999;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3em;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      position: absolute;
      right: 0;
    }
  }

  ul {
    position: absolute;
    z-index: 2;
    top: 3em;
    padding: 1em;
    background-color: ${(props) => props.theme.colors.figureBackground};
    li {
      margin: 0.5em auto;
      color: black;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile.value}) {
    display: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
