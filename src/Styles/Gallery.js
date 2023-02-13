import styled from "styled-components";

export const Gallery = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 5em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5em;

  picture {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  }
`;
