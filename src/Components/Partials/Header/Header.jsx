import React, { useState } from "react";
import { MainNav, MainHeader, Hamburger, NavLink, Menu } from "./MainNav.styled";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import Logo from "./Logo";
import SearchBar from "../Searchbar/SearchBar";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const [shrinkHeader] = useState(false);
  const { setLoggedIn, loggedIn } = useLoginStore();

  return (
    <MainHeader>
      <MainNav shrinkHeader={shrinkHeader}>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <Logo />
        <Menu roll isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/">Forside</NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/boliger">Boliger til salg</NavLink>
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
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          <SearchBar />
        </Menu>
      </MainNav>
    </MainHeader>
  );
};

export default Header;
