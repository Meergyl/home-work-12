import React from "react"
import { useContext } from "react"
import { Modal } from "../Modal/Modal"
import CartContext from "../../store/Cart-context";
import classes from "./Cart.module.css";
import { CartItem } from "./CartItem";
export const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed()}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id)

  }
  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({
      ...item,
      totalAmount:1
    })

  }


  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          totalAmount={item.totalAmount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}

        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onCloseCart}>Close</button>
          {hasItems && <button>Order</button>}
        </div>
      </div>
    </Modal>
  );
}