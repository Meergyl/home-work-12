import React from "react";
import { useReducer } from "react";
import CardContext from "./Cart-context";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      const updatedTotalAmount =
        state.totalAmount + action.food.price * action.food.totalAmount;
      let updatedItem;
      let updatedItems;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.food.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          totalAmount: existingCartItem.totalAmount + action.food.totalAmount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItem = { ...action.food };
        updatedItems = state.items.concat(updatedItem);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "DELETE_FOOD":
      const existingCartItemMinusIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartMinusItem = state.items[existingCartItemMinusIndex];
      const updatedTotalMinusAmount =
        state.totalAmount - existingCartMinusItem.price;
      let updatedMinusItems;
      if (existingCartMinusItem.totalAmount === 1) {
        updatedMinusItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartMinusItem,
          totalAmount: existingCartMinusItem.totalAmount - 1,
        };
        updatedMinusItems = [...state.items];
        updatedMinusItems[existingCartItemMinusIndex] = updatedItem;
      }
      return {
        items: updatedMinusItems,
        totalAmount: updatedTotalMinusAmount,
      };
    case "CLEAR_CART":
      return { type: [], totalAmount: 0 };
    default:
      return state;
  }
};
export const CartProvider = (props) => {
  const [stateOrderFood, dispatchOrderFood] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItem = (item) => {
    dispatchOrderFood({ type: "ADD_FOOD", food: item });
  };
  const removeItem = (id) => {
    dispatchOrderFood({ type: "DELETE_FOOD", id: id });
  };
  const cleareCart = () => {
    dispatchOrderFood({ type: "CLEAR_CART" });
  };
  const cartContext = {
    items: stateOrderFood.items,
    totalAmount: stateOrderFood.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    clearCard: cleareCart,
  };
  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
}




