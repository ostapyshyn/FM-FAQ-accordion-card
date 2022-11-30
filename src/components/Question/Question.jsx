import React, { useState } from 'react';
import arrow from '../../assets/icon-arrow-down.svg';
import styles from './Question.module.scss';

const Question = () => {
  const [show, setShow] = useState(false);
  return (
    <section onClick={() => setShow((prevState) => setShow(!prevState))}>
      <div className={styles.question}>
        <p>How many team members can I invite?</p>
        <img src={arrow} alt="arrow" className={show && styles.img} />
      </div>

      {show && (
        <p>
          You can invite up to 2 additional users on the Free plan. There is no limit on team
          members for the Premium plan.
        </p>
      )}
    </section>
  );
};

export default Question;
