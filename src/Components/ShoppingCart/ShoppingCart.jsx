import React from "react";
import { Button_Delete, Button_Styled } from "../../Styles/Button_Styled";
import { useShoppingCardStore } from "./useShoppingCard";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Cart } from "./Cart.styled";
import { Shop } from "./Shop.styled";

const ShoppingCart = () => {
  const { cartItems, setDeleteItem, setEmptyCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCardStore();
  const { loggedIn } = useLoginStore();
  const navigate = useNavigate();

  let subtotal = 0;
  cartItems.forEach((item) => (subtotal += item.price * item.amount));

  return (
    <Shop>
      <h2> Indkøbskurv</h2>

      {loggedIn ? (
        <>
          {cartItems.map((item, i) => (
            <Cart key={i}>
              <picture>
                <img src={item.image} alt={item.title} />
              </picture>
              <h2>{item.title}</h2>
              <div>
                <p>Antal</p>
              </div>

              <figcaption>
                <p className="button" onClick={() => increaseCartQuantity(item.id, item.price, 1, item.title)}>
                  <FaPlus size={20} />
                </p>

                <>
                  <p className="button">{item.amount}</p>
                </>

                <h5>+ {item.amount} på lager</h5>

                <p
                  className="button"
                  id="delete"
                  onClick={() => {
                    if (item.amount > 1) {
                      decreaseCartQuantity(item.id, item.price, 1);
                    } else {
                      setDeleteItem(item.id);
                    }
                  }}>
                  <FaMinus size={20} />
                </p>
              </figcaption>
            </Cart>
          ))}

          <article>
            <div>
              <h4>Beløb {subtotal} DKK </h4>

              <>{cartItems > [1] ? <Button_Delete onClick={() => setEmptyCart()}>Tøm kurven</Button_Delete> : null}</>
            </div>
            <Button_Styled onClick={() => navigate("/checkout")}>Til kassen</Button_Styled>
          </article>
        </>
      ) : (
        <p>Log ind for at se din indkøbskurv</p>
      )}
    </Shop>
  );
};

export default ShoppingCart;
