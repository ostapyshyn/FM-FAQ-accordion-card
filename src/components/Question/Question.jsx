import React, { useState } from 'react';
import arrow from '../../assets/icon-arrow-down.svg';
import styles from './Question.module.scss';

const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <section onClick={() => setShow((prevState) => !prevState)}>
      <div className={styles.question}>
        <p className={`${styles.ask}  ${show && styles.bold}`}>{question}</p>
        <img src={arrow} alt="arrow" className={show && styles.img} />
      </div>

      {show && <p className={styles.answer}>{answer}</p>}
    </section>
  );
};

export default Question;
