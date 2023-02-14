import styled from "styled-components";

export const SliderContainer = styled.div`
  color: white;
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .react-slideshow-container {
    width: 100vw;
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
    width: 100%;
    img {
      aspect-ratio: 3/1;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
