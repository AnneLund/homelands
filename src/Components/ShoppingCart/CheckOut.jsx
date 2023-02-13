import React from "react";
import styled from "styled-components";

const CheckOutPage = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CheckOut = () => {
  return (
    <CheckOutPage>
      <h1>Kasse</h1>
    </CheckOutPage>
  );
};

export default CheckOut;
