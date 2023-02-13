import React from "react";
import styled from "styled-components";
import { useShoppingCardStore } from "./useShoppingCard";

const Cart = styled.span`
  background-color: ${(props) => props.theme.colors.button1};
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  border-radius: 50px;
  position: absolute;
  margin: -0.7em 1em;
  z-index: 2;
`;

const TinyCart = () => {
  const { cartItems } = useShoppingCardStore();
  let subtotal = 0;
  cartItems.forEach((item) => (subtotal += item.amount));
  return <Cart>{subtotal}</Cart>;
};

export default TinyCart;
