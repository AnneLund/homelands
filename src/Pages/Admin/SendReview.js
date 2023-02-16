import styled from "styled-components";

export const SendReview = styled.article`
  padding: 2em;
  position: relative;
  width: 40vw;
  height: 40vh;
  background-color: #ffffff2b;

  h2 {
    color: white;
    text-align: center;
    margin-bottom: 1em;
  }
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5em;

    button {
      width: 50%;
      margin: 0 auto;
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    background-color: none;
    border: none;
    color: white;
    margin: 0.5em;
  }
`;
