import React, { useRef } from 'react';
import woman from '../../assets/illustration-woman-online-desktop.svg';
import woman_mob from '../../assets/illustration-woman-online-mobile.svg';
import box from '../../assets/illustration-box-desktop.svg';
import bg_desktop from '../../assets/bg-pattern-desktop.svg';
import questions from '../../assets/questions.js';
import Question from '../Question';

import styles from './Card.module.scss';

const Card = () => {
  return (
    <main>
      <div className={styles.image}>
        <picture>
          <source media="(min-width: 800px)" srcSet={woman} />
          <img src={woman_mob} alt="woman" className={styles.pic} />
        </picture>
        <img src={bg_desktop} alt="box" className={styles.box_bg} />
      </div>

      <img src={box} alt="box" className={styles.box} />

      <div className={styles.faq}>
        <h1 className={styles.title}>FAQ</h1>
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
