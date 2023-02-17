import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../../../Assets/header.png";

export const MainNav = styled.nav`
  display: flex;
  background-image: url(${header});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 800;
  font-family: "Odibee Sans", cursive;
  height: 13vh;
  width: 100%;
  flex-wrap: wrap;
  padding: 1rem 0;
  transition: padding 500ms ease;
  position: absolute;

  .burger {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    position: relative;

    @media (max-width: 1000px) {
      flex-direction: column;
      transition: max-height 0.3 ease-in;
      width: 100%;
      z-index: 50000;
      max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    }
  }

  li {
    list-style: none;
    &:last-of-type {
      margin-left: auto;
    }
  }

  button {
    padding: 0.5em 1.5em;
    background-color: ${(props) => props.theme.colors.button2};
    border: 1px #1f5e5b solid;
    border-radius: 5px;
    cursor: pointer;
    a {
      color: black;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.logoLinkColor};
      transition: 500ms ease-in-out;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: flex-end;
    background-image: none;

    li {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: flex-end;
    background-color: black;
  }
`;

export const MainHeader = styled.header`
  position: relative;
  grid-gap: 1em;
  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Hamburger = styled.div`
  flex-direction: column;
  padding: 1.3em;
  cursor: pointer;
  span {
    height: 5px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 100;
  p {
    &:hover {
      transition: 500ms ease-in-out;
      color: ${(props) => props.theme.colors.logoLinkColor};
    }
  }
`;

export const Menu = styled.ul`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1.5em;
  margin-left: auto;
  margin-right: 50px;

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: column;
    align-items: center;
    background-color: #0000006c;
    transition: 300ms ease-in;
    width: 100%;
    backdrop-filter: blur(20px);
    z-index: 50000;
    position: relative;
    margin: 0;
    height: ${({ isOpen }) => (isOpen ? "90vh" : "0")};
    top: ${({ isOpen }) => (isOpen ? "-10vh" : "0")};
    padding-top: ${({ isOpen }) => (isOpen ? "5vh" : "0")};
  }
`;
