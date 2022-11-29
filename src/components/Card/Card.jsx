import React, { useRef } from 'react';
import woman from '../../assets/illustration-woman-online-desktop.svg';
import Question from '../Question';

import styles from './Card.module.scss';

const Card = () => {
  return (
    <main>
      <img src={woman} alt="woman" />
      <div className={styles.faq}>
        <h1>FAQ</h1>
        <Question />
      </div>
    </main>
  );
};

export default Card;
