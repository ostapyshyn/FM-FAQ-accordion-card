import React, { useRef } from 'react';
import styles from './Button.module.scss';

const Button = ({ rating, onClickRating }) => {
  const buttonRef = useRef();

  return (
    <button ref={buttonRef} className={styles.dot} onClick={() => onClickRating(rating)}>
      {rating}
    </button>
  );
};

export default Button;
