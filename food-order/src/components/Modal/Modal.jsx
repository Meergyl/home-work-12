import React from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';


const Backdrop = (props) => {
  return <div onClick={props.onCloseCart} className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  const portalElement = document.getElementById('overlay');
  return (
    <>
      {createPortal(<Backdrop onCloseCart ={props.onCloseCart}/>, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
