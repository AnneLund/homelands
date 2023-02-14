import styled from "styled-components";

export const ModalStyled = styled.div`
  display: ${(props) => props.showmodal}; /* Hidden by default */
  position: fixed; /* Stay in place */
  left: 0;
  z-index: 1;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: black; /* Fallback color */
  animation: fade-in 1s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
