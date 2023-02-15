import styled from "styled-components";

export const SliderContainer = styled.div`
  color: white;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .react-slideshow-container {
    position: relative;
    button {
      margin: 3em;
      background-color: inherit;
    }

    svg {
      fill: #ffffffa7;
      margin: 0;
    }

    .default-nav {
      &:focus {
        background: none;
      }
    }
  }

  .each-slide {
    img {
      aspect-ratio: 3/1;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    margin: 0;
  }
`;
