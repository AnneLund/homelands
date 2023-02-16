import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.7em 1em;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.onButtonBackground};
  border: 1px #1f5e5b solid;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: none;
`;
