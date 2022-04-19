import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import React, { useState } from "react";

const Cart = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isCheckout, setIsCheckout] = useState(false);
  const cartItemAddHandler = (item) => {
    cardCtx.addItem({
      ...item,
      amount: 1,
    });
  };
  const cartItemRemoveHandler = (id) => {
    cardCtx.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cardCtx = useContext(CartContext);
  const totalAmount = `₹${cardCtx.totalAmount.toFixed(2)}`;
  const hasItems = cardCtx.items.length > 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cardCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onHideCart}>
        Cancel
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = (userData) => {
    fetch(
      `https://thirsty-now-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json`,
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cardCtx.items,
          totalAmount: cardCtx.totalAmount,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    cardCtx.clearItem();
    setIsSubmitted(true);
  };

  const mainContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span className={styles.amount}>{totalAmount}</span>
      </div>
      {isCheckout && cardCtx.items.length !== 0 && (
        <Checkout
          onCancel={props.onHideCart}
          onConfirm={submitOrderHandler}
        ></Checkout>
      )}
      {!isCheckout && modalActions}
    </>
  );

  const submittedMessage = (
    <>
      <p>
        Successfully Ordered the meal ! <br />
        Have a good day with the meals..
      </p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {!isSubmitted ? mainContent : submittedMessage}
    </Modal>
  );
};

export default Cart;
