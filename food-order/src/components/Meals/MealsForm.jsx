import React, { useRef } from 'react';
import styles from '../Meals/MealsForm.module.css';
import Input from '../UI/Input';
const MealsForm = (props) => {
  const amountRef = useRef(null);

  const submitHnadler = (event) => {
    event.preventDefault();
    const amount = amountRef.current.value;
    const convertAmount = +amount;
    console.log(convertAmount);
    props.onAddToCart(convertAmount);
  };
  return (
    <form onSubmit={submitHnadler} className={styles.form}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          defaultValue: '1',
          min: '1',
          max: '5',
          type: 'number',
        }}
      />

      <button onClick={submitHnadler}>+ Add</button>
    </form>
  );
};
export default MealsForm;
