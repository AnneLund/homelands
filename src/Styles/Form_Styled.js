import styled from "styled-components";

export const Form_Styled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  gap: 0.5em;
  width: 50%;
  input,
  button,
  textarea {
    width: 60%;
    margin: 0 auto;
  }

  button {
    background-color: #00000085;
    cursor: pointer;
    &:hover {
      background-color: #646464;
    }
  }
`;
