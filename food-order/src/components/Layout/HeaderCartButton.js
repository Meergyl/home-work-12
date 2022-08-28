import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';
import { CartIcon } from '../icons/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currNumber,item)=> {
    return currNumber + item.totalAmount
  },0)
  return (
    <button onClick={props.onShowCart}  className={classes.button}>
      <span className={classes.icon}>
        <CartIcon/>
        </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
