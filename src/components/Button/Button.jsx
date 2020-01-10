import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <div className={styles.ButtonWrapper}>
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default Button;
