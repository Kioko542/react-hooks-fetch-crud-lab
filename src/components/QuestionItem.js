import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  // Check if 'answers' is defined before mapping over it
  const options = answers ? (
    answers.map((answer, index) => (
      <option key={index} value={index}>
        {answer}
      </option>
    ))
  ) : null;

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
