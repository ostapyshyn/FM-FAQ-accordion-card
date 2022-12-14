import React, { useRef, useState } from 'react';
import woman from '../../assets/illustration-woman-online-desktop.svg';
import woman_mob from '../../assets/illustration-woman-online-mobile.svg';
import box from '../../assets/illustration-box-desktop.svg';
import bg_desktop from '../../assets/bg-pattern-desktop.svg';
import bg_mobile from '../../assets/bg-pattern-mobile.svg';
import questions from '../../assets/questions.js';
import Question from '../Question';

import styles from './Card.module.scss';
import Header from '../Header';
import Accordion from '../Accordion';

const Card = () => {
  const [clicked, setClicked] = useState('0');

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  return (
    <main>
      <div className={styles.image}>
        <picture className={styles.img_big}>
          <img src={woman} alt="woman" className={styles.pic} />
        </picture>
        <picture className={styles.img_small}>
          <img src={woman_mob} alt="woman" className={styles.pic} />
        </picture>

        <img src={bg_desktop} alt="box" className={styles.box_bg} />
        <img src={bg_mobile} alt="box" className={styles.bg_mobile} />
      </div>

      <img src={box} alt="box" className={styles.box} />

      <div className={styles.faq}>
        <Header />
        {/* <Accordion /> */}
        {questions.map((question, index) => {
          return (
            <Question
              onToggle={() => handleToggle(index)}
              key={question.id}
              question={question.question}
              answer={question.answer}
              active={clicked === index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Card;
