import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';
import classes from './MealItem.module.css'
import MealsForm from './MealsForm';

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    const selectedFood = {
      id: props.id,
      name: props.name,
      price: props.price,
      totalAmount:amount
    }
    console.log(selectedFood);
    cartCtx.addItem(selectedFood)
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.desrciption}>{props.description}</p>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.mealForm}>
        <MealsForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};
