import React from "react";
import { MainNav, MainHeader, Hamburger, NavLink, Menu } from "./MainNav.styled";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import Logo from "./Logo";
import SearchBar from "../Searchbar/SearchBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const { setLoggedIn, loggedIn } = useLoginStore();
  const currentLocation = useLocation();

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
            <NavLink style={currentLocation.pathname === "/" ? { color: "#ecbe2add" } : { color: "#ffffff" }} to="/">
              Forside
            </NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink style={currentLocation.pathname === "/boliger" ? { color: "#ecbe2add" } : { color: "#ffffff" }} to="/boliger">
              Boliger til salg
            </NavLink>
          </li>

          {loggedIn ? (
            <>
              <li
                onClick={() => {
                  setLoggedIn(false, "", "", "");
                }}>
                <button>Log ud</button>
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
