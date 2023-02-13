import styled from "styled-components";

export const Flashmessage = styled.span`
  div {
    display: block;
    position: fixed;
    z-index: 1200;
    background-color: #15568495;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    animation: floatingAlert ease-in ${(props) => props.flashDuration}ms forwards;
    animation-fill-mode: forwards;
    padding: 10px 30px;
    color: white;
    border: solid 1px white;
    border-radius: 5px;
    font-weight: 900;
    text-transform: uppercase;
  

  &:last-of-type {
    display: block;
  }
}

  @keyframes floatingAlert {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }

    9% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    91% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }

  @-webkit-keyframes floatingAlert {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }

    9% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    91% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }
`;
