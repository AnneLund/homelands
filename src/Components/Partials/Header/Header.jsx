import React from "react";
import { MainNav, MainHeader, Hamburger, NavLink, Menu } from "./MainNav.styled";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import Logo from "./Logo";
import SearchBar from "../Searchbar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const { loggedIn } = useLoginStore();
  const currentLocation = useLocation();
  const navigate = useNavigate();

  return (
    <MainHeader>
      <MainNav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <Logo />
        <Menu roll isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink style={currentLocation.pathname === "/" ? { color: "#AF7627" } : { color: "#ffffff" }} to="/">
              <p>Forside</p>
            </NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink style={currentLocation.pathname === "/boliger" ? { color: "#AF7627" } : { color: "#ffffff" }} to="/boliger">
              <p>Boliger til salg</p>
            </NavLink>
          </li>

          {loggedIn ? (
            <>
              <li
                onClick={() => {
                  navigate("/admin");
                }}>
                <button>Min side</button>
              </li>
            </>
          ) : (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink style={currentLocation.pathname === "/login" ? { color: "#ecbe2add" } : { color: "#ffffff" }} to="/login">
                Login
              </NavLink>
            </li>
          )}
          <SearchBar />
        </Menu>
      </MainNav>
    </MainHeader>
  );
};

export default Header;
