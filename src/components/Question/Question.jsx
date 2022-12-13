import React, { useState } from 'react';
import arrow from '../../assets/icon-arrow-down.svg';
import styles from './Question.module.scss';

const Question = ({ question, answer, onToggle, active }) => {
  return (
    <section onClick={onToggle}>
      <div className={styles.question}>
        <p className={`${styles.ask}  ${active ? styles.bold : undefined}`}>{question}</p>
        <img src={arrow} alt="arrow" className={active ? styles.img : undefined} />
      </div>

      <div className={`${styles.answer_wrapper} ${active ? styles.open : ''}`}>
        <p className={styles.answer}>{answer}</p>
      </div>
      {/* {active ? <p className={styles.answer}>{answer}</p> : undefined} */}
    </section>
  );
};

export default Question;
