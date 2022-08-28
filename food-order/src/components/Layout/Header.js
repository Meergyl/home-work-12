import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals (1).jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
export const Header = (props) => {
  return( <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="Food" />
    </div>
  </>
  );
}