import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.7em 1em;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.onButtonBackground};
  border: 1px #1f5e5b solid;
  border-radius: 5px;
`;

export const Button_Delete = styled.button`
  padding: 0.5em;
  color: black;
  background-color: ${(props) => props.theme.colors.onButtonBackground};
  border: 1px #1f5e5b solid;
  border-radius: 5px;
`;

export const Button_Radius_Styled = styled.button`
  padding: 1em 1.5em;
  width: 40%;
  color: black;
  background-color: ${(props) => props.theme.colors.button2};
  border: 1px #1f5e5b solid;
  border-radius: 20px;
`;

export const BuyButton = styled.button`
  padding: 0.5em 1em;
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.button1};
  border: 1px #1f5e5b solid;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.onHover};
  }
`;
