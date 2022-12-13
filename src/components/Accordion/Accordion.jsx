import AccordionItem from '../AccordionItem';
import questions from '../../assets/questions.js';

const Accordion = () => {
  return (
    <ul className="accordion">
      {questions.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;
