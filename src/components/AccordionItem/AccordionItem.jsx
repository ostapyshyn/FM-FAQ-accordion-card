const AccordionItem = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <li className="accordion_item">
      <button className="button">
        {question}
        <span className="control">—</span>
      </button>
      <div className="answer_wrapper">
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
