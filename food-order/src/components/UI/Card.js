import React from 'react'
import classes from '../UI/Card.module.css'
export const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>
}