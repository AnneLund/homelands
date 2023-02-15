import React from "react";
import styled from "styled-components";

const HeaderLogo = styled.div`
  position: relative;
  div {
    background-color: ${(props) => props.theme.colors.logoLinkColor};
    width: 16.5vw;
    border: black 2px solid;
    position: absolute;
    top: 20px;
    z-index: -1;
    padding: 0.1em 0.5em;
    h2 {
      color: white;
      font-weight: 100;
      font-size: 4vw;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    position: absolute;
    left: 30px;
    top: 3vh;
    div {
      height: auto;
      width: 40vw;
      h2 {
        font-size: 9vw;
      }
    }
  }
`;

const Logo = () => {
  return (
    <HeaderLogo>
      <div>
        <h2>HomeLands</h2>
      </div>
    </HeaderLogo>
  );
};

export default Logo;
