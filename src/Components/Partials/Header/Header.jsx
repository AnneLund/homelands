import React, { useState } from "react";
import { MainNav, MainHeader, Hamburger, NavLink, Menu } from "./MainNav.styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import TinyCart from "../../ShoppingCart/TinyCart";

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

        <Menu roll isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/">Forside</NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/about">Om</NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/products">Produkter</NavLink>
          </li>

          {loggedIn ? (
            <>
              <li
                onClick={() => {
                  setLoggedIn(false, "", "", "");
                }}>
                <button>Log ud</button>
              </li>
              <li>
                <NavLink to="/cart">
                  <AiOutlineShoppingCart />
                  <TinyCart />
                </NavLink>
              </li>
            </>
          ) : (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </Menu>
      </MainNav>
    </MainHeader>
  );
};

export default Header;
