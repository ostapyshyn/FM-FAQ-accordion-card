import React, { useRef } from 'react';
import woman from '../../assets/illustration-woman-online-desktop.svg';
import woman_mob from '../../assets/illustration-woman-online-mobile.svg';
import questions from '../../assets/questions.js';
import Question from '../Question';

import styles from './Card.module.scss';

const Card = () => {
  return (
    <main>
      <picture>
        <source media="(min-width: 800px)" srcSet={woman} />
        <img src={woman_mob} alt="woman" />
      </picture>
      <div className={styles.faq}>
        <h1>FAQ</h1>
        {questions.map((question) => {
          return (
            <Question key={question.id} question={question.question} answer={question.answer} />
          );
        })}
      </div>
    </main>
  );
};

export default Card;
