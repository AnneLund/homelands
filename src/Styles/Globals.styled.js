import { createGlobalStyle, css } from "styled-components";

export const Globals = createGlobalStyle`${css`
  * {
    list-style-type: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }

  img {
    width: 100%;
    display: block;
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
`}`;
